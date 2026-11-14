const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

// Aktuelles Jahr im Footer
year.textContent = new Date().getFullYear();

// Dark-/Light-Mode mit Speicherung der Auswahl
const savedTheme = localStorage.getItem("webstart-theme");
if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
  themeToggle.textContent = "â˜€";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  if (isDark) {
    delete document.documentElement.dataset.theme;
    themeToggle.textContent = "â˜¾";
    localStorage.setItem("webstart-theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    themeToggle.textContent = "â˜€";
    localStorage.setItem("webstart-theme", "dark");
  }
});

// Mobiles NavigationsmenÃ¼
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "MenÃ¼ schlieÃŸen" : "MenÃ¼ Ã¶ffnen");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "MenÃ¼ Ã¶ffnen");
  });
});
