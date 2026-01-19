const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ACTIVE LINK SWITCH */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close menu on mobile
    navMenu.classList.remove("active");
  });
});



  // Trigger when section is visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      startCount();
      started = true;
    }
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('stats'));



