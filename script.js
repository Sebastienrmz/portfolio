// Menu mobile et copie de l’adresse e-mail. Le contenu reste dans index.html.

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 700px)');

function fermerMenu(rendreFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = 'Menu ';
  navigation.classList.remove('is-open');
  if (rendreFocus) menu.focus();
}

// Sans JavaScript, la navigation et les détails restent disponibles.
document.body.classList.add('enhanced');
menu.hidden = !mobile.matches;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Fermer ' : 'Menu ';
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) fermerMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') fermerMenu(true);
});
mobile.addEventListener('change', () => {
  menu.hidden = !mobile.matches;
  fermerMenu();
});

const boutonEmail = document.querySelector('#copy-email');
const messageCopie = document.querySelector('#copy-status');
if (navigator.clipboard && window.isSecureContext) {
  boutonEmail.hidden = false;
  boutonEmail.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('sebastienramirez91100@gmail.com');
      messageCopie.textContent = 'Adresse e-mail copiée.';
    } catch {
      messageCopie.textContent = 'La copie est indisponible. Vous pouvez sélectionner l’adresse ci-dessus.';
    }
  });
}
