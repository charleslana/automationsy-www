const en = {
  selectPt: "Portuguese",
  selectEn: "English",
  footerText: "Created by Charles Lana - AutomationSy · © 2022",
  indexGetStartedTitle: "Get started with AutomationSy",
  indexGetStartedText: `An automation library for automated tests, developed in typescript with high <b>test performance</b>. AutomationSy is <b>open source</b>.`,
  indexGetStartedButton: "Download package",
  indexOpenSourceTitle: "Open source project",
  indexOpenSourceText: "See how AutomationSy works!",
  indexOpenSourceLinkExample: "Examples",
  indexOpenSourceLinkGithub: "GitHub",
  indexDocumentationTitle: "Documentation",
  indexDocumentationText: `Read more about using the AutomationSy library and discover many features to integrate into your tests`,
  indexDocumentationNewVersion: "(current support)",
  docDocumentationTitle: "Documentation",
  docSearchInput: "Search...",
  docInstallTitle: "Install",
  docStartTitle: "Start",
  docRequirementsTitle: "Requirements",
  docVersionTitle: "Version",
  docConfigTitle: "Config",
  docHeadlessTitle: "Headless",
  docMaximizedTitle: "Maximized",
  docWindowSizeTitle: "Window size",
  docDefaultTimeoutTitle: "Default timeout",
};

const pt = {
  selectPt: "Português",
  selectEn: "Inglês",
  footerText: "Criado por Charles Lana - AutomationSy · © 2022",
  indexGetStartedTitle: "Comece com o AutomationSy",
  indexGetStartedText: `Uma biblioteca de automação para testes automatizados, desenvolvida em typescript com alta <b>performance dos testes</b>. AutomationSy é <b>open source</b>.`,
  indexGetStartedButton: "Baixar pacote",
  indexOpenSourceTitle: "Projeto de código aberto",
  indexOpenSourceText: "Veja como funciona o AutomationSy!",
  indexOpenSourceLinkExample: "Exemplos",
  indexOpenSourceLinkGithub: "GitHub",
  indexDocumentationTitle: "Documentação",
  indexDocumentationText: `Leia mais sobre o uso da biblioteca AutomationSy e descubra diversas funcionalidades para integrar aos seus testes`,
  indexDocumentationNewVersion: "(suporte atual)",
  docDocumentationTitle: "Documentação",
  docSearchInput: "Pesquisar...",
  docInstallTitle: "Instalação",
  docStartTitle: "Início",
  docRequirementsTitle: "Requerimentos",
  docVersionTitle: "Versão",
  docConfigTitle: "Configuração",
  docHeadlessTitle: "Modo sem cabeça",
  docMaximizedTitle: "Defina a tela ao máximo",
  docWindowSizeTitle: "Defina a altura e largura da janela",
  docDefaultTimeoutTitle: "Defina o tempo de espera das ações",
};

(function () {
  "use strict";

  let language = localStorage.getItem("language");

  const userLang = window.navigator.language.split("-");

  if (language == null) {
    language = userLang[0];
  }

  translate(language);

  const selectLanguage = document.getElementById("selectLanguage");

  selectLanguage?.addEventListener("change", () => {
    const language = selectLanguage.value;
    translate(language);
  });

  [...selectLanguage.options].map((e) => (e.selected = e.value == language));
})();

function translate(language) {
  let i18n = en;

  if (language == "pt") {
    i18n = pt;
  }

  const queryAll = document.querySelectorAll("[data-lang-str]");

  queryAll.forEach((element) => {
    const string = element.getAttribute("data-lang-str");
    element.innerHTML = i18n[string];
    if (element.tagName.toLowerCase() === "input") {
      element.setAttribute("placeholder", i18n[string]);
    }
  });

  localStorage.setItem("language", language);
}
