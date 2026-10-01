// Runs before CSS to avoid a flash; storage can be blocked in private browsers.
(() => {
    let saved;
    try { saved = localStorage.getItem("saifex-theme"); } catch {}
    const light = saved === "light" ||
        (saved !== "dark" && matchMedia("(prefers-color-scheme: light)").matches);
    document.documentElement.classList.toggle("light", light);
    document.documentElement.style.colorScheme = light ? "light" : "dark";
})();
