const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ===== STICKY NAVBAR SHADOW ===== */
const navbar = document.querySelector(".coffee-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* ===== ACTIVE MENU BASED ON PAGE ===== */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".coffee-navbar .nav-link").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});




// Trigger when section is visible
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    startCount();
    started = true;
  }
}, { threshold: 0.5 });

observer.observe(document.getElementById('stats'));






