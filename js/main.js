const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem("saifex-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const useLightTheme = savedTheme ? savedTheme === "light" : prefersLight;

function applyTheme(isLight) {
    document.body.classList.toggle("light", isLight);
    document.documentElement.style.colorScheme = isLight ? "light" : "dark";

    if (themeIcon) {
        themeIcon.textContent = isLight ? "☾" : "☀";
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isLight));
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    }
}

applyTheme(useLightTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isLight = !document.body.classList.contains("light");
        localStorage.setItem("saifex-theme", isLight ? "light" : "dark");
        applyTheme(isLight);
    });
}

function closeMenu() {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
        if (!mobileMenu.classList.contains("open")) return;
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });
}

const revealElements = document.querySelectorAll(
    ".app-card, .value, .support-card, .legal-section"
);

if ("IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.96) {
            element.classList.add("is-visible");
        }
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    revealElements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
            observer.observe(element);
        }
    });
}
