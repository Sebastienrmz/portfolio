(() => {
  'use strict';

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const mobile = window.matchMedia('(max-width: 700px)');

  function closeMenu(restoreFocus = false) {
    menu.setAttribute('aria-expanded', 'false');
    menu.firstChild.textContent = 'Menu ';
    navigation.classList.remove('is-open');
    if (restoreFocus) menu.focus();
  }

  // Sans JavaScript, la navigation et les détails restent disponibles.
  document.body.classList.add('enhanced');
  menu.hidden = !mobile.matches;
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.firstChild.textContent = open ? 'Fermer ' : 'Menu ';
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  mobile.addEventListener('change', () => {
    menu.hidden = !mobile.matches;
    closeMenu();
  });

  const emailButton = document.querySelector('#copy-email');
  const copyStatus = document.querySelector('#copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    emailButton.hidden = false;
    emailButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('sebastienramirez91100@gmail.com');
        copyStatus.textContent = 'Adresse e-mail copiée.';
      } catch {
        copyStatus.textContent = 'La copie est indisponible. Vous pouvez sélectionner l’adresse ci-dessus.';
      }
    });
  }
})();
