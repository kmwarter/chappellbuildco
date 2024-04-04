(async () => {
  const header = document.querySelector('header');
  const ul = document.querySelector('nav ul');
  const logo = document.getElementById('logo');
  const hamburger = document.getElementById('hamburger');

  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;

    if (isOpen) {
      logo.style.filter = 'none';
      hamburger.style.filter = 'none';

      header.setAttribute("id", "open-header");
      ul.style.display = 'flex';
    } else {
      logo.style.filter = '';
      hamburger.style.filter = '';

      header.removeAttribute("id");
      ul.style.display = '';
    }
  };

  hamburger.addEventListener('click', toggleMenu);
})()