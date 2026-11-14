// Mobile menu
const menu = document.getElementById("menu");
document.getElementById("menuBtn").addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// Scroll reveal + skill bar animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("show");
    e.target.querySelectorAll(".track i").forEach(b => b.style.width = b.dataset.w + "%");
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".card, section .wrap > p, #skills .grid").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// Highlight the nav link of the section on screen
const links = document.querySelectorAll("nav ul a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach((sec, i) => {
    const on = sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y;
    links[i].classList.toggle("active", on);
  });
});
