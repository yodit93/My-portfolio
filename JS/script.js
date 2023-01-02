const humberger = document.querySelector('.icon-menu');
const clickEvent = document.querySelector('.click-event');
const closeBtn = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.menu-lists li a');

humberger.addEventListener('click', () => {
  clickEvent.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  clickEvent.classList.remove('active');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    clickEvent.classList.remove('active');
  });
});
