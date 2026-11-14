(() => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("siteNav");

  if (!toggle || !menu) return;

  const setMenuOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "મુખ્ય મેનુ બંધ કરો" : "મુખ્ય મેનુ ખોલો"
    );
  };

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuOpen(menu.hidden);
  });

  // Do not hide the menu from an anchor's click handler. Hiding an anchor's
  // parent during the same click can cancel its default navigation on mobile.
  // Let the browser follow the link normally.

  document.addEventListener("click", (event) => {
    if (menu.hidden) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || menu.hidden) return;
    setMenuOpen(false);
    toggle.focus();
  });
})();
