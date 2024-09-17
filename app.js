document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
      navList.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  document.querySelectorAll(".nav-links").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});
