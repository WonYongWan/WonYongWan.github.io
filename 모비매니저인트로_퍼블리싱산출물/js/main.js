import { fullPageEffect, fullResize, topBtnFlag, menuFlag, navFlag, specificFlag, pageCount, pageWrapTime } from './fullPage.js';

window.addEventListener('load', () => {

  // wheel event
  window.addEventListener('wheel', (e) => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;
    // full page
    fullPageEffect('wheel', e);
  });

  // touch event
  let touchStartY;
  let touchStartX;
  let touchEndY;
  let touchEndX;

  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].pageY;
    touchStartX = e.touches[0].pageX;
  });

  window.addEventListener('touchend', (e) => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;
    touchEndY = e.changedTouches[0].pageY;
    touchEndX = e.changedTouches[0].pageX;

    fullPageEffect('touch', e, touchStartY, touchEndY);
  });

  // resize event
  window.addEventListener('resize', () => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;

    fullResize();
  });
});

// component
function tabMenu(off_name, on_name) {
  const offs = document.querySelectorAll(off_name);
  const ons = document.querySelectorAll(on_name);

  offs.forEach(elm => {
    elm.classList.remove('on');
  });

  ons.forEach(elm => {
    elm.classList.add('on');
  })
}

window.tabMenu = tabMenu;

// elm event
const $hdToggle = document.querySelector('header .toggle');
const $hdBG = document.querySelector('header .bg');
const $hdMenu = document.querySelector('header .menu');
const $hdMenuList = document.querySelectorAll('header .menu ul li a');

function hdMenuOn() {
  $hdToggle.classList.add('on');
  if(!$hdBG.classList.contains('on')) $hdBG.classList.add('on');
  if(!$hdMenu.classList.contains('on')) $hdMenu.classList.add('on');
}

function hdMenuOff() {
  $hdToggle.classList.remove('on');
  if($hdBG.classList.contains('on')) $hdBG.classList.remove('on');
  if($hdMenu.classList.contains('on')) $hdMenu.classList.remove('on');
}

$hdToggle.addEventListener('click', () => {
  if(!$hdToggle.classList.contains('on')) {
    hdMenuOn();

  } else {
    hdMenuOff();
  }
});

$hdMenuList.forEach(elm => {
  elm.addEventListener('click', () => {
    if($hdToggle.classList.contains('on')) {
      hdMenuOff();
    }
  });
});

$hdBG.addEventListener('click', () => {
  if($hdToggle.classList.contains('on')) {
    hdMenuOff();
  }
});