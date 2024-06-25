function ready(){
  let lastScrollTop = 0;
  let header = document.querySelector('.header');
  let headerA = document.querySelectorAll('.textColor');
  let headerI = document.querySelector('.wallColor');

  header.addEventListener('mouseover', () => {
    header.classList.add('headerHover');
    for(let i = 0; i < headerA.length; i++){
      headerA[i].classList.add('headerA');
    }
    headerI.classList.add('headerI');
  });

  header.addEventListener('mouseout', () => {
    header.classList.remove('headerHover');
    for(let i = 0; i < headerA.length; i++){
      headerA[i].classList.remove('headerA');
    }
    headerI.classList.remove('headerI');
  });

  window.addEventListener("scroll", function(){

    let scrollTop = this.scrollY;
    let introScrollTop = document.querySelector(".introduceApp").offsetTop;
    let textColor = document.querySelectorAll(".textColor");

    if(scrollTop > introScrollTop){
      document.querySelector(".header").style.background = "rgba(255,255,255,1)";
      document.querySelector(".header").style.borderBottom = "1px solid rgba(238, 238, 238, 1)";
      for( let i = 0; i < textColor.length; i++ ){
        let item = textColor.item(i);
        item.style.color = "#333";
      }
      // headerI.style.background = "#333";
    } else {
      document.querySelector(".header").style.background= "rgba(255,255,255,0)";
      document.querySelector(".header").style.borderBottom = "1px solid rgba(238, 238, 238, 0)";
      for( let i = 0; i < textColor.length; i++ ){
        let item = textColor.item(i);
        item.style.color = "#fff";
      }
      // headerI.style.background = "#fff";
    }

    if((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
      document.querySelector(".header").style.top = "-100px";
      document.querySelector(".header").style.transition = "ease-in-out .3s";
    } else {
      document.querySelector(".header").style.top = "0";
      document.querySelector(".header").style.transition = "ease-in-out .3s";
    }
    lastScrollTop = scrollTop;
  });
  
};
ready();

window.onload = function() {
  let headerMBtn = document.querySelector('.headerM-buttonWrap');
  let headerMMenu = document.querySelector('.headerM-menuWrap');
  let footer = document.querySelector('.footer');
  let bannerM = document.querySelector('.banner-video-max768px');
  let introApp = document.querySelector('.introduceApp-max768px');
  let introPro = document.querySelector('.introduceProduct-max768px');
  let sticks = document.querySelectorAll('.stick');
  let stickB = document.querySelector('.stickB > div');
  let drag = document.querySelector('.drag');
  let dragHand = document.querySelector('.drag-hand');
  let imgWrap = document.querySelectorAll('.introAppM-imgWrap');
  let introAppCont = document.querySelector('.introduceAppM-contents');
  let bannerBox = document.querySelector('.bannerM-Box');
  const body = document.getElementById('body');

  headerMBtn.addEventListener('click', function(){
    headerMMenu.classList.toggle('opacity');
    bannerM.classList.toggle('displayNone');
    introApp.classList.toggle('displayNone');
    introPro.classList.toggle('displayNone');
    footer.classList.toggle('displayNone');

    sticks[0].classList.toggle('opacityZ');
    sticks[2].classList.toggle('opacityZ');
    sticks[1].classList.toggle('stickB::after');
    sticks[1].classList.toggle('rotateStick');
    stickB.classList.toggle('rotateStickB');
  });

  drag.addEventListener('click', function(){
    dragHand.classList.add('displayNone');
    introAppCont.classList.remove('drag');
    imgWrap[0].classList.add('visible');
    imgWrap[1].classList.add('visible');
    imgWrap[2].classList.add('visible');
    imgWrap[3].classList.add('visible');
    imgWrap[4].classList.add('visible');
    imgWrap[5].classList.add('visible');
    imgWrap[6].classList.add('visible');
  });

  bannerBox.addEventListener('click', function(){
    bannerBox.classList.toggle('bannerMBlack');
    body.classList.toggle('bodyColor');
    stickB.classList.toggle('ctickColor');
    sticks[0].classList.toggle('ctickColor');
    sticks[1].classList.toggle('ctickColor');
    sticks[2].classList.toggle('ctickColor');
  });

  //intro
  let button = document.querySelectorAll('.btn');
  let contentsBox = document.querySelectorAll('.contents');
  let introduceMButton = document.querySelectorAll('.icon');


  button[1].addEventListener('click', function(){

    contentsBox[0].classList.toggle('activeA');
    introduceMButton[0].classList.toggle('rotate');
  });

  button[0].addEventListener('click', function(){

    contentsBox[0].classList.toggle('activeA');
    introduceMButton[0].classList.toggle('rotate');
  });

  button[2].addEventListener('click', function(){

    contentsBox[1].classList.toggle('activeP');
    introduceMButton[1].classList.toggle('rotate');
  });

};

// 헤더 스크롤 효과 초본

// function ready(){
//   let lastScrollTop = 0
//   let delta = 15;

//   window.addEventListener("scroll", function(){
//     let st = this.scrollY;
//     // if(Math.abs(lastScrollTop - st) <= delta)return;
//     if((st > lastScrollTop) && (lastScrollTop > 0)) {
//       document.querySelector(".header").style.top= "-100vw";
//       document.querySelector(".header").style.transition= "ease-in-out .5s";
//     } else {
//       document.querySelector(".header").style.top= "0";
//       document.querySelector(".header").style.transition= "ease-in-out .5s";
//     }
//     lastScrollTop = st;

//     console.log(lastScrollTop);
//     console.log(st);
//   })
// };
// ready();