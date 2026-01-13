window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
    }, 800);
  }, 2200);
});
