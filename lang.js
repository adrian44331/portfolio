document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  setLang("hu");
});

function setLang(lang) {
  document.querySelectorAll("[data-hu]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
