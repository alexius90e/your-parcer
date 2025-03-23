const headerBurgerButton = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu');

if (headerBurgerButton && headerMenu) {
  headerBurgerButton.addEventListener('click', (event) => {
    const isActive = event.target.classList.contains('active');

    if (isActive) {
      headerMenu.classList.remove('active');
      headerBurgerButton.classList.remove('active');
    } else {
      headerMenu.classList.add('active');
      headerBurgerButton.classList.add('active');
    }
  });

  headerMenu.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      headerMenu.classList.remove('active');
      headerBurgerButton.classList.remove('active');
    }
  });
}
