const toggle = document.getElementById("mode-toggle");
const body = document.body;

function setMode(dark) {
  if (dark) {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    body.classList.remove("dark");
    toggle.textContent = "🌙";
  }
}

// Set dark mode as default
setMode(true);
localStorage.setItem("darkMode", "true");

toggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark);
  setMode(isDark);
});
