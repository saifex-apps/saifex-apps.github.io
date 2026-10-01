const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const slovene = document.documentElement.lang === "sl";
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

function applyTheme(light) {
    document.documentElement.classList.toggle("light", light);
    document.documentElement.style.colorScheme = light ? "light" : "dark";
    if (themeIcon) themeIcon.textContent = light ? "☾" : "☀";
    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(light));
        themeToggle.setAttribute("aria-label", slovene
            ? (light ? "Vklopi temni videz" : "Vklopi svetli videz")
            : (light ? "Switch to dark theme" : "Switch to light theme"));
    }
}
applyTheme(document.documentElement.classList.contains("light"));
if (themeToggle) themeToggle.addEventListener("click", () => {
    const light = !document.documentElement.classList.contains("light");
    try { localStorage.setItem("saifex-theme", light ? "light" : "dark"); } catch {}
    applyTheme(light);
});
const systemTheme = matchMedia("(prefers-color-scheme: light)");
systemTheme.addEventListener("change", event => {
    let saved;
    try { saved = localStorage.getItem("saifex-theme"); } catch {}
    if (saved !== "light" && saved !== "dark") applyTheme(event.matches);
});

function closeMenu(restoreFocus = false) {
    if (!mobileMenu || !menuButton) return;
    const wasOpen = mobileMenu.classList.contains("open");
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", slovene ? "Odpri meni" : "Open menu");
    if (restoreFocus && wasOpen) {
        const target = menuButton.getClientRects().length ? menuButton : document.querySelector(".site-header .brand");
        if (target) target.focus();
    }
}
if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", slovene
            ? (open ? "Zapri meni" : "Odpri meni") : (open ? "Close menu" : "Open menu"));
    });
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu()));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu(true);
    });
    document.addEventListener("click", event => {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    // Never leave focus in a hidden mobile menu after the desktop breakpoint.
    matchMedia("(min-width: 901px)").addEventListener("change", event => {
        if (event.matches) closeMenu(mobileMenu.contains(document.activeElement));
    });
}

// Keep anchor targets visible and preserve the same section when changing language.
document.querySelectorAll("[data-language-link]").forEach(link => {
    if (location.hash) link.hash = location.hash;
    link.addEventListener("click", () => { link.hash = location.hash; });
});
const revealElements = document.querySelectorAll(".app-card, .value, .support-card");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < innerHeight * .96) element.classList.add("is-visible");
    });
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .08 });
    revealElements.forEach(element => {
        if (!element.classList.contains("is-visible")) observer.observe(element);
    });
}
