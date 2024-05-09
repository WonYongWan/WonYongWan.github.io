import { heightSet, fullPageEffect, fullResize, topBtnFlag, menuFlag, navFlag, specificFlag, pageCount, pageWrapTime } from './fullPage.js';
import { header } from './header.js';
import { page1 } from './page1.js';
import { page2, page2Mobile } from './page2.js';
import { page4, page4BtnResize } from './page4.js';
import { page5 } from './page5.js';
import { page6, page6Keep } from './page6.js';
import { topBtn } from './topBtn.js';

window.addEventListener('load', () => {
  heightSet();
  page1();
  page4();
  page5();
  page6();

  document.querySelector('.test3').innerText = `innerHeight : ${window.innerHeight}`;

  // wheel event
  window.addEventListener('wheel', (e) => {
    if(topBtnFlag || menuFlag || navFlag || specificFlag) return;
    // full page
    fullPageEffect('wheel', e);
    header(pageCount);
    topBtn(pageCount);
    page2(pageCount, pageWrapTime);
    page6Keep(pageCount);
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
    if(topBtnFlag || menuFlag || navFlag || specificFlag) return;
    touchEndY = e.changedTouches[0].pageY;
    touchEndX = e.changedTouches[0].pageX;

    // full page
    fullPageEffect('touch', e, touchStartY, touchEndY);
    header(pageCount);
    topBtn(pageCount);
    page2(pageCount, pageWrapTime);
    page2Mobile(touchStartX, touchEndX, pageCount);
    page6Keep(pageCount);
  });

  // resize event
  window.addEventListener('resize', () => {
    if(topBtnFlag || menuFlag || navFlag || specificFlag) return;
    // full page
    fullResize();
    header(pageCount);
    topBtn(pageCount);
    page2(pageCount, pageWrapTime);
    page6Keep(pageCount);
    page4BtnResize();
  });

  window.addEventListener('click', () => {
    page2(pageCount, pageWrapTime);
  });

  // header color change
  const $fpMenu = document.querySelectorAll('.fp_menu');
  $fpMenu.forEach(elm => elm.addEventListener('click', () => header(pageCount)));
});