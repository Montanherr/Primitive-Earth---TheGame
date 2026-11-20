function setupGallery(dialog) {
  if (!dialog?.showModal) return;

  const links = [...document.querySelectorAll("[data-gallery-photo]")];
  const image = dialog.querySelector(".gallery-full-image");
  const caption = dialog.querySelector(".gallery-caption");
  const counter = dialog.querySelector(".gallery-counter");
  let current = 0;
  let opener;
  let pressedBackdrop = false;
  let touchStart;

  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    caption.dataset.i18n = link.dataset.i18nLabel;
    caption.textContent = getTranslation(caption.dataset.i18n);
    image.src = link.href;
    counter.textContent = `${current + 1} / ${links.length}`;
  }

  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      show(index);
      dialog.showModal();
    });
  });

  for (const button of dialog.querySelectorAll("[data-gallery-step]")) {
    button.addEventListener("click", () => show(current + Number(button.dataset.galleryStep)));
  }
  dialog.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    show(current + (event.key === "ArrowLeft" ? -1 : 1));
  });
  dialog.addEventListener("pointerdown", (event) => {
    pressedBackdrop = event.target === dialog;
  });
  dialog.addEventListener("click", (event) => {
    if (pressedBackdrop && event.target === dialog) dialog.close();
    pressedBackdrop = false;
  });
  image.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" && event.isPrimary) {
      touchStart = { x: event.clientX, y: event.clientY };
    }
  });
  image.addEventListener("pointerup", (event) => {
    if (!touchStart || event.pointerType !== "touch" || !event.isPrimary) return;
    const horizontal = event.clientX - touchStart.x;
    const vertical = event.clientY - touchStart.y;
    touchStart = undefined;
    if (Math.abs(horizontal) >= 45 && Math.abs(horizontal) > Math.abs(vertical)) {
      show(current + (horizontal < 0 ? 1 : -1));
    }
  });
  image.addEventListener("pointercancel", () => { touchStart = undefined; });
  dialog.addEventListener("close", () => {
    touchStart = undefined;
    opener?.focus({preventScroll: true});
  });
}

function driveDownloadUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.username || url.password || url.port) return null;

  const idInPath = url.hostname === "drive.google.com"
    ? url.pathname.match(/^\/file\/d\/([\w-]+)(?:\/(?:view|preview|edit))?\/?$/)?.[1]
    : undefined;
  const isDriveDownload = (url.hostname === "drive.google.com" && ["/open", "/uc"].includes(url.pathname))
    || (url.hostname === "drive.usercontent.google.com" && url.pathname === "/download");
  const fileId = idInPath || (isDriveDownload && url.searchParams.get("id"));
  if (!fileId || !/^[\w-]+$/.test(fileId)) return null;

  if (url.hostname === "drive.usercontent.google.com" || url.pathname === "/uc") {
    url.searchParams.set("export", "download");
    return url;
  }

  const download = new URL("https://drive.google.com/uc");
  download.searchParams.set("export", "download");
  download.searchParams.set("id", fileId);
  const resourceKey = url.searchParams.get("resourcekey");
  if (resourceKey) download.searchParams.set("resourcekey", resourceKey);
  return download;
}

setupGallery(document.getElementById("gallery-viewer"));

const betaDownload = document.getElementById("beta-download");
if (betaDownload) {
  const downloadUrl = driveDownloadUrl(betaDownload.dataset.driveUrl);
  if (downloadUrl) {
    const thanks = document.getElementById("beta-thanks");
    betaDownload.href = downloadUrl.href;
    betaDownload.hidden = false;
    document.getElementById("beta-unavailable").hidden = true;
    document.getElementById("beta-download-ready").hidden = false;
    betaDownload.addEventListener("click", () => {
      thanks.hidden = false;
      thanks.focus();
    });
  }
}
