// ---------- Router (hash) ----------
const pages = Array.from(document.querySelectorAll(".page"));
const navLinks = Array.from(document.querySelectorAll("[data-route]"));

function getRoute() {
  const hash = (location.hash || "#home").replace("#", "").trim().toLowerCase();
  return hash || "home";
}

function setActiveNav(route) {
  const links = document.querySelectorAll(".nav__link");
  links.forEach(a => a.classList.remove("is-active"));

  // Marca activo por data-route
  const match = document.querySelectorAll(`.nav__link[data-route="${route}"]`);
  match.forEach(a => a.classList.add("is-active"));
}

function showPage(route) {
  pages.forEach(p => p.classList.remove("is-active"));
  const page = document.querySelector(`.page[data-page="${route}"]`);
  (page || document.querySelector(`.page[data-page="home"]`)).classList.add("is-active");
  setActiveNav(route);
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", () => showPage(getRoute()));
document.addEventListener("DOMContentLoaded", () => showPage(getRoute()));


// ---------- Hero scroll cue ----------
const scrollCue = document.querySelector("[data-scroll-next]");
if (scrollCue) {
  scrollCue.addEventListener("click", () => {
    const next = document.querySelector("#home-next");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ---------- Gallery filter ----------
const pills = Array.from(document.querySelectorAll(".pill"));
const shopGrid = document.getElementById("shopGrid");

function setFilter(type) {
  if (!shopGrid) return;

  pills.forEach(p => p.classList.toggle("is-active", p.dataset.filter === type));

  const items = Array.from(shopGrid.querySelectorAll(".product"));
  items.forEach(item => {
    const match = type === "all" || item.dataset.type === type;
    item.style.display = match ? "" : "none";
  });
}

pills.forEach(p => {
  p.addEventListener("click", () => setFilter(p.dataset.filter));
});


