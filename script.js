const translations = {
  en: {
    nav_about: "About",
    nav_features: "Features",
    nav_beta: "Beta",

    platform: "Only for PC",

    hero_title: "Survive the Ancient World",

    hero_text:
      "Become a dinosaur and fight to survive in a brutal prehistoric ecosystem.",

    btn_beta: "Join the Beta",
    btn_more: "Learn More",

    about_title:
      "A New Dinosaur Survival Experience",

    about_text:
      "Primitive Earth is a prehistoric survival game focused on immersion, climate changes, hunting, danger and the struggle to stay alive.",

    pc_title: "PC Release",

    pc_text:
      "Primitive Earth is being developed exclusively for computers.",

    features_title: "Game Features",

    feature_1_title: "Dinosaurs",

    feature_1_text:
      "Play as different prehistoric creatures, each with unique behavior.",

    feature_2_title: "Survival",

    feature_2_text:
      "Manage hunger, thirst, stamina and danger in the wild.",

    feature_3_title: "Dynamic World",

    feature_3_text:
      "Face rain, dry seasons, fires and environmental changes.",

    feature_4_title: "Hunt or Be Hunted",

    feature_4_text:
      "Carnivores, herbivores and AI creatures fight for survival.",

    beta_title: "Beta Test Coming Soon",

    beta_text:
      "Primitive Earth is in development and a beta test will be available for validation.",

    subscribe: "Notify Me",

    email_placeholder: "Enter your email",

    privacy_consent:
      "I agree to receive news and beta test notifications from Primitive Earth.",

    footer_rights: "All rights reserved.",

    form_invalid_email:
      "Please enter a valid email address.",

    form_consent_required:
      "Please accept the consent option to continue.",

    form_sending: "Sending...",

    form_success:
      "You are on the beta list! Check your email inbox.",

    form_duplicate:
      "This email has already been registered on this device.",

    form_error:
      "The registration could not be completed. Please try again.",

    form_button_sending: "Sending..."
  },

  pt: {
    nav_about: "Sobre",
    nav_features: "Recursos",
    nav_beta: "Beta",

    platform: "Apenas para PC",

    hero_title: "Sobreviva ao Mundo Antigo",

    hero_text:
      "Torne-se um dinossauro e lute para sobreviver em um ecossistema pré-histórico brutal.",

    btn_beta: "Entrar no Beta",
    btn_more: "Saiba Mais",

    about_title:
      "Uma Nova Experiência de Sobrevivência com Dinossauros",

    about_text:
      "Primitive Earth é um jogo de sobrevivência pré-histórico focado em imersão, mudanças climáticas, caça, perigo e luta pela vida.",

    pc_title: "Lançamento para PC",

    pc_text:
      "Primitive Earth está sendo desenvolvido exclusivamente para computadores.",

    features_title: "Recursos do Jogo",

    feature_1_title: "Dinossauros",

    feature_1_text:
      "Jogue com diferentes criaturas pré-históricas, cada uma com comportamento único.",

    feature_2_title: "Sobrevivência",

    feature_2_text:
      "Gerencie fome, sede, stamina e perigos da natureza.",

    feature_3_title: "Mundo Dinâmico",

    feature_3_text:
      "Enfrente chuva, clima seco, incêndios e mudanças ambientais.",

    feature_4_title: "Cace ou Seja Caçado",

    feature_4_text:
      "Carnívoros, herbívoros e criaturas de IA lutam pela sobrevivência.",

    beta_title: "Beta Teste em Breve",

    beta_text:
      "Primitive Earth está em desenvolvimento e terá um beta teste para validação.",

    subscribe: "Avise-me",

    email_placeholder: "Digite seu e-mail",

    privacy_consent:
      "Concordo em receber novidades e avisos sobre o beta do Primitive Earth.",

    footer_rights: "Todos os direitos reservados.",

    form_invalid_email:
      "Digite um endereço de e-mail válido.",

    form_consent_required:
      "Aceite a opção de consentimento para continuar.",

    form_sending: "Enviando...",

    form_success:
      "Você entrou na lista do beta! Verifique sua caixa de entrada.",

    form_duplicate:
      "Este e-mail já foi cadastrado neste dispositivo.",

    form_error:
      "Não foi possível concluir o cadastro. Tente novamente.",

    form_button_sending: "Enviando..."
  },

  es: {
    nav_about: "Acerca",
    nav_features: "Características",
    nav_beta: "Beta",

    platform: "Solo para PC",

    hero_title: "Sobrevive al Mundo Antiguo",

    hero_text:
      "Conviértete en un dinosaurio y lucha por sobrevivir en un ecosistema prehistórico brutal.",

    btn_beta: "Unirse a la Beta",
    btn_more: "Saber Más",

    about_title:
      "Una Nueva Experiencia de Supervivencia con Dinosaurios",

    about_text:
      "Primitive Earth es un juego de supervivencia prehistórico centrado en la inmersión, cambios climáticos, caza, peligro y supervivencia.",

    pc_title: "Lanzamiento para PC",

    pc_text:
      "Primitive Earth está siendo desarrollado exclusivamente para computadoras.",

    features_title: "Características del Juego",

    feature_1_title: "Dinosaurios",

    feature_1_text:
      "Juega como diferentes criaturas prehistóricas, cada una con comportamiento único.",

    feature_2_title: "Supervivencia",

    feature_2_text:
      "Gestiona hambre, sed, resistencia y peligros de la naturaleza.",

    feature_3_title: "Mundo Dinámico",

    feature_3_text:
      "Enfrenta lluvia, estaciones secas, incendios y cambios ambientales.",

    feature_4_title: "Caza o Sé Cazado",

    feature_4_text:
      "Carnívoros, herbívoros y criaturas de IA luchan por sobrevivir.",

    beta_title: "Beta Próximamente",

    beta_text:
      "Primitive Earth está en desarrollo y tendrá una beta de validación.",

    subscribe: "Avísame",

    email_placeholder:
      "Introduce tu correo electrónico",

    privacy_consent:
      "Acepto recibir noticias y avisos sobre la beta de Primitive Earth.",

    footer_rights:
      "Todos los derechos reservados.",

    form_invalid_email:
      "Introduce un correo electrónico válido.",

    form_consent_required:
      "Acepta la opción de consentimiento para continuar.",

    form_sending: "Enviando...",

    form_success:
      "¡Estás en la lista de la beta! Revisa tu correo electrónico.",

    form_duplicate:
      "Este correo ya fue registrado en este dispositivo.",

    form_error:
      "No se pudo completar el registro. Inténtalo nuevamente.",

    form_button_sending: "Enviando..."
  }
};

const languageSelect =
  document.getElementById("languageSelect");

const newsletterForm =
  document.getElementById("newsletterForm");

const newsletterEmail =
  document.getElementById("newsletterEmail");

const newsletterConsent =
  document.getElementById("newsletterConsent");

const newsletterButton =
  document.getElementById("newsletterButton");

const newsletterMessage =
  document.getElementById("newsletterMessage");

const heroVideo =
  document.querySelector(".hero-video");

const supportedLanguages =
  Object.keys(translations);

let currentLanguage = "en";

/*
  Troque pelo e-mail que receberá os cadastros.

  Exemplo:
  const destinationEmail = "contato@primitiveearth.com.br";
*/
const destinationEmail = "contatomontanher@gmail.com";

function getTranslation(key) {
  return (
    translations[currentLanguage]?.[key] ||
    translations.en[key] ||
    key
  );
}

function setLanguage(lang) {
  const selected =
    supportedLanguages.includes(lang)
      ? lang
      : "en";

  currentLanguage = selected;

  document.documentElement.lang =
    selected === "pt"
      ? "pt-BR"
      : selected;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[selected][key];

      if (value) {
        element.textContent = value;
      }
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const key =
        element.dataset.i18nPlaceholder;

      const value =
        translations[selected][key];

      if (value) {
        element.placeholder = value;
      }
    });

  languageSelect.value = selected;

  localStorage.setItem(
    "primitive-earth-language",
    selected
  );

  clearNewsletterMessage();
}

function showNewsletterMessage(
  message,
  type = ""
) {
  newsletterMessage.textContent = message;

  newsletterMessage.classList.remove(
    "success",
    "error",
    "loading"
  );

  if (type) {
    newsletterMessage.classList.add(type);
  }
}

function clearNewsletterMessage() {
  newsletterMessage.textContent = "";

  newsletterMessage.classList.remove(
    "success",
    "error",
    "loading"
  );
}

function isValidEmail(email) {
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function normalizeEmail(email) {
  return email
    .trim()
    .toLowerCase();
}

function emailWasRegistered(email) {
  const registeredEmails =
    JSON.parse(
      localStorage.getItem(
        "primitive-earth-beta-emails"
      ) || "[]"
    );

  return registeredEmails.includes(email);
}

function saveRegisteredEmail(email) {
  const registeredEmails =
    JSON.parse(
      localStorage.getItem(
        "primitive-earth-beta-emails"
      ) || "[]"
    );

  if (!registeredEmails.includes(email)) {
    registeredEmails.push(email);

    localStorage.setItem(
      "primitive-earth-beta-emails",
      JSON.stringify(registeredEmails)
    );
  }
}

function setNewsletterLoading(isLoading) {
  newsletterButton.disabled = isLoading;
  newsletterEmail.disabled = isLoading;
  newsletterConsent.disabled = isLoading;

  newsletterButton.textContent = isLoading
    ? getTranslation("form_button_sending")
    : getTranslation("subscribe");
}

languageSelect.addEventListener(
  "change",
  (event) => {
    setLanguage(event.target.value);
  }
);

newsletterForm.addEventListener(
  "submit",
  async (event) => {
    event.preventDefault();

    clearNewsletterMessage();

    const email = normalizeEmail(
      newsletterEmail.value
    );

    const honeyField =
      newsletterForm.querySelector(
        '[name="_honey"]'
      );

    /*
      Se um bot preencher o campo escondido,
      o formulário é interrompido.
    */
    if (honeyField?.value) {
      return;
    }

    if (!isValidEmail(email)) {
      showNewsletterMessage(
        getTranslation("form_invalid_email"),
        "error"
      );

      newsletterEmail.focus();
      return;
    }

    if (!newsletterConsent.checked) {
      showNewsletterMessage(
        getTranslation(
          "form_consent_required"
        ),
        "error"
      );

      newsletterConsent.focus();
      return;
    }

    if (emailWasRegistered(email)) {
      showNewsletterMessage(
        getTranslation("form_duplicate"),
        "error"
      );

      return;
    }

    if (
      !destinationEmail ||
      destinationEmail.includes("SEU_EMAIL")
    ) {
      showNewsletterMessage(
        "Configure o e-mail de destino no arquivo script.js.",
        "error"
      );

      return;
    }

    setNewsletterLoading(true);

    showNewsletterMessage(
      getTranslation("form_sending"),
      "loading"
    );

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(
          destinationEmail
        )}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept: "application/json"
          },

          body: JSON.stringify({
            email: email,

            subject:
              "Novo cadastro no beta do Primitive Earth",

            message:
              "Um novo jogador se cadastrou para receber novidades sobre o beta do Primitive Earth.",

            language: currentLanguage,

            consent:
              "O usuário aceitou receber novidades sobre o beta.",

            source:
              window.location.href,

            registeredAt:
              new Date().toISOString(),

            _subject:
              "Novo cadastro no Beta - Primitive Earth",

            _template: "table",

            _captcha: "false"
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
          "Form submission failed."
        );
      }

      saveRegisteredEmail(email);

      newsletterForm.reset();

      showNewsletterMessage(
        getTranslation("form_success"),
        "success"
      );
    } catch (error) {
      console.error(
        "Erro ao cadastrar e-mail:",
        error
      );

      showNewsletterMessage(
        getTranslation("form_error"),
        "error"
      );
    } finally {
      setNewsletterLoading(false);
    }
  }
);

const savedLanguage =
  localStorage.getItem(
    "primitive-earth-language"
  );

const browserLanguage =
  navigator.language
    .toLowerCase()
    .startsWith("pt")
    ? "pt"
    : navigator.language
        .toLowerCase()
        .startsWith("es")
      ? "es"
      : "en";

setLanguage(
  savedLanguage || browserLanguage
);

if (heroVideo) {
  heroVideo.play().catch(() => {
    document.addEventListener(
      "pointerdown",
      () => {
        heroVideo.play().catch(() => {});
      },
      {
        once: true
      }
    );
  });
}