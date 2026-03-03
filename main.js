function changeLanguage(lang) {
  // 1. Guardar la selección en localStorage para que se mantenga al recargar la página
  localStorage.setItem("language", lang);

  // 2. Cambiar el texto de los elementos según el idioma seleccionado
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // 3. Cambiar la imagen de la bandera
  const flagImg = document.querySelector(".nav-item.dropdown img");
  if (flagImg) {
    if (lang === "es") flagImg.src = "./flags/es.png";
    else if (lang === "en") flagImg.src = "./flags/en.png";
    else if (lang === "cat") flagImg.src = "./flags/cat.png";
    else if (lang === "fr") flagImg.src = "./flags/fr.png";
    else if (lang === "eus") flagImg.src = "./flags/eus.png";
    else if (lang === "de") flagImg.src = "./flags/de.png";
    else if (lang === "it") flagImg.src = "./flags/it.png";
    else if (lang === "pt") flagImg.src = "./flags/pt.png";
  }
}

function showSection(sectionId) {
  // 1. Esconder todas las secciones
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => (sec.style.display = "none"));

  // 2. Mostrar la sección seleccionada
  document.getElementById(sectionId).style.display = "block";

  // 3. Cerrar el menú hamburguesa en móviles tras hacer clic
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse.classList.contains("show")) {
    new bootstrap.Collapse(navbarCollapse).hide();
  }
}
// Al cargar la página, ver si ya había un idioma guardado
window.onload = () => {
  const savedLang = localStorage.getItem("language") || "es";
  changeLanguage(savedLang);
};
