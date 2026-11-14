(() => {
  const addCreatorFooter = () => {
    if (document.getElementById("creatorFooter")) return;

    const style = document.createElement("style");
    style.textContent = `
      .creator-footer {
        max-width: 980px;
        margin: 28px auto 0;
        padding: 13px 16px max(13px, env(safe-area-inset-bottom));
        border-top: 1px solid #e5e9f2;
        color: #758098;
        font: .8rem/1.5 system-ui, "Noto Sans Gujarati", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
      }
      .creator-footer .creator-credit,
      .creator-footer a,
      .creator-footer .creator-separator {
        flex: none;
      }
      .creator-footer a {
        color: #465cc5;
        text-decoration: none;
      }
      .creator-footer a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);

    const footer = document.createElement("footer");
    footer.id = "creatorFooter";
    footer.className = "creator-footer";
    footer.setAttribute("aria-label", "વેબસાઇટના નિર્માતા અને સંપર્ક લિંક્સ");
    footer.innerHTML = `
      <span class="creator-credit">બનાવનાર: <strong>Nitrajsinh Solanki</strong></span>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="https://nitrajsinh-solanki.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="https://github.com/Nitrajsinh-Solanki" target="_blank" rel="noopener noreferrer">GitHub</a>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="https://www.linkedin.com/in/nitrajsinh-solanki-647b11293" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="https://x.com/Nitrajsinh_S" target="_blank" rel="noopener noreferrer">X</a>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="https://medium.com/@nrsolanki2005" target="_blank" rel="noopener noreferrer">Medium</a>
      <span class="creator-separator" aria-hidden="true">·</span>
      <a href="mailto:nrsolanki2005@gmail.com">Email</a>
    `;
    document.body.appendChild(footer);
  };

  addCreatorFooter();

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

  // Allow the browser to activate the link first, then dismiss the menu.
  // This preserves normal navigation, including on mobile browsers.
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      window.setTimeout(() => setMenuOpen(false), 0);
    });
  });

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
