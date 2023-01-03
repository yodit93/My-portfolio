const humberger = document.querySelector('.icon-menu');
const clickEvent = document.querySelector('.click-event');
const closeButton = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.menu-lists li a');

humberger.addEventListener('click', () => {
  clickEvent.classList.add('show');
});

closeButton.addEventListener('click', () => {
  clickEvent.classList.remove('show');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    clickEvent.classList.remove('show');
  });
});
