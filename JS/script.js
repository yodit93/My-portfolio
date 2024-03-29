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

// project details pop up window

const portfolio = document.querySelector('.project-intro-grid');
const popupCont = document.querySelector('.popup-cont');
const closeBtn = document.querySelector('.dclose-btn');
const main = document.querySelector('main');
const header = document.querySelector('header');

const projects = `
<section class="project-intro">
<figure class="project-picture-container">
  <img class="project-picture" src="images/project-img/project1.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Tonic</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
  </p>
  <ul class="prog-lang-buttons margin-set">
    <li><a class="html lang" href="">html</a></li>
    <li><a class="css lang" href="">css</a></li>
    <li><a class="js lang" href="">javascript</a></li>
  </ul>
  <div class="see-project">
    <a id="id1" class="see-project-link" href="#">See Project</a>
  </div>
</div>
</section>
<section class="project-intro">
<figure class="project-picture-container order">
  <img class="project-picture" src="images/project-img/project2.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Multi-Post
    Stories</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
  </p>
  <ul class="prog-lang-buttons margin-set">
    <li><a class="html lang" href="">html</a></li>
    <li><a class="css lang" href="">css</a></li>
    <li><a class="js lang" href="">javascript</a></li>
  </ul>
  <div class="see-project">
    <a id="id2" class="see-project-link" href="#">See Project</a>
  </div>
</div>
</section>
<section class="project-intro">
<figure class="project-picture-container">
  <img class="project-picture" src="images/project-img/project3.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Tonic</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
  </p>
  <ul class="prog-lang-buttons margin-set">
    <li><a class="html lang" href="">html</a></li>
    <li><a class="css lang" href="">css</a></li>
    <li><a class="js lang" href="">javascript</a></li>
  </ul>
  <div class="see-project">
    <a id="id3" class="see-project-link" href="#">See Project</a>
  </div>
</div>
</section>
<section class="project-intro">
<figure class="project-picture-container order">
  <img class="project-picture" src="images/project-img/project4.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Multi-Post
    Stories</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
  </p>
  <ul class="prog-lang-buttons margin-set">
    <li><a class="html-link lang" href="">html</a></li>
    <li><a class="css-link lang" href="#">css</a></li>
    <li><a class="js-link lang" href="#">javascript</a></li>
  </ul>
  <div class="see-project">
    <a id="id4" class="see-project-link" href="#">See Project</a>
  </div>
</div>
</section>`;

portfolio.innerHTML = projects;

const proObjects = [
  {
    name: 'Tonic',
    id: 'id1',
    featuredImage: './images/project-img/project1.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    name: 'Tonic',
    id: 'id2',
    featuredImage: './images/project-img/project2.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    name: 'Tonic',
    id: 'id3',
    featuredImage: './images/project-img/project3.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    name: 'Tonic',
    id: 'id3',
    featuredImage: './images/project-img/project4.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
];
function selectProject(idToChecked) {
  proObjects.forEach((obj) => {
    if (obj.id === idToChecked) {
      const dContSec = document.createElement('section');
      dContSec.classList.add('d-sec');
      const dContainer = document.createElement('div');
      dContainer.classList.add('d-cont');
      const dTitle = document.createElement('h2');
      dTitle.innerText = obj.name;
      dTitle.classList.add('project-title');
      dContainer.appendChild(dTitle);
      // information
      const dStatsCon = document.createElement('div');
      dStatsCon.classList.add('project-stats', 'margin-set');
      const dStatsPlace = document.createElement('p');
      dStatsPlace.innerText = 'CANOPY';
      dStatsPlace.classList.add('project-place');
      dStatsCon.appendChild(dStatsPlace);
      const dStatsImg = document.createElement('img');
      dStatsImg.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg);
      const dStatsType = document.createElement('p');
      dStatsType.innerText = 'Back End Dev';
      dStatsType.classList.add('project-type');
      dStatsCon.appendChild(dStatsType);

      const dStatsImg2 = document.createElement('img');
      dStatsImg2.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg2);

      const dStatsYear = document.createElement('p');
      dStatsYear.innerText = '2015';
      dStatsYear.classList.add('project-year');
      dStatsCon.appendChild(dStatsYear);
      dContainer.appendChild(dStatsCon);
      // image
      const dImageCont = document.createElement('figure');
      dImageCont.classList.add('project-picture-container');
      const dImage = document.createElement('img');
      dImage.src = obj.featuredImage;
      dImage.classList.add('project-picture');
      dImageCont.appendChild(dImage);
      dContainer.appendChild(dImageCont);
      // description
      const dProjInfo = document.createElement('p');
      dProjInfo.innerText = obj.description;
      dProjInfo.classList.add('project-description', 'margin-set');
      dContainer.appendChild(dProjInfo);

      // technologies
      const dLangCont = document.createElement('ul');
      dLangCont.classList.add('prog-lang-buttons', 'margin-set');
      obj.technologies.forEach((list) => {
        const dLang = document.createElement('li');
        dLang.innerText = list;
        dLang.classList.add(list, 'lang');
        dLangCont.appendChild(dLang);
      });
      dContainer.appendChild(dLangCont);
      // demo
      const dButtonCont = document.createElement('div');
      dButtonCont.classList.add('dbtn-cont');
      const seeLiveBtn = document.createElement('a');
      seeLiveBtn.innerHTML = 'See live <img src="./images/seelive.svg" alt="Live demo">';
      seeLiveBtn.src = obj.demo;
      seeLiveBtn.classList.add('see-project-link', 's-btn');
      dButtonCont.appendChild(seeLiveBtn);
      // source
      const seeSrcBtn = document.createElement('a');
      seeSrcBtn.innerHTML = 'See Source <img src="./images/see-src.svg" alt="source code">';
      seeSrcBtn.src = obj.source;
      seeSrcBtn.classList.add('see-project-link', 's-btn');
      dButtonCont.appendChild(seeSrcBtn);
      dContainer.appendChild(dButtonCont);
      dContSec.appendChild(dContainer);
      const dBtmLineFig = document.createElement('figure');
      dBtmLineFig.classList.add('end', 'align-btm');
      const dBottomLine = document.createElement('img');
      dBottomLine.src = './images/Shape.svg';
      dBtmLineFig.appendChild(dBottomLine);
      dContSec.appendChild(dBtmLineFig);
      popupCont.appendChild(dContSec);
    }
  });
}

const seeProject = document.querySelectorAll('.see-project-link');
seeProject.forEach((links) => {
  links.addEventListener('click', (event) => {
    portfolio.innerHTML = '';
    main.style.display = 'none';
    header.style.display = 'none';
    const checkedButton = event.target;
    const idToChecked = checkedButton.id;
    selectProject(idToChecked);
    popupCont.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  portfolio.innerHTML = projects;
  main.style.display = 'block';
  header.style.display = 'block';
  popupCont.classList.remove('active');
  window.location.reload();
});