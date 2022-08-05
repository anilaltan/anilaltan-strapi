import logo from "./extensions/logo.jpg";
import otherLogo from "./extensions/other-logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      "tr",
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Backoffice",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Anil Altan Backoffice",
        "Auth.form.welcome.subtitle": "Log in to your Admin account",
        "HomePage.helmet.title": "Dashboard",
        "app.components.HomePage.welcome.again": "Welcome to anilaltan.com",
        "app.components.HomePage.welcomeBlock.content.again":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    },
    auth: {
      logo: logo,
    },
    menu: {
      logo: otherLogo,
    },
    head: {
      favicon: favicon,
    },
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
  },
  bootstrap() {},
};
