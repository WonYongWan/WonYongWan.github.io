import { fullPageEffect, fullResize } from './fullEvent.js';
import { sliderStart, sliderUpdate, sliderMB } from './slider.js';
import { topBtnPos } from './topBtn.js';
import { $modal1, modal1 } from './modal.js';

window.addEventListener('load', () => {
  // page 1 start setting
  document.querySelectorAll('.page')[0].classList.add('on');

  // topBtn position start setting
  topBtnPos();

  // modal setting
  modal1();

  // window load slider state
  if(window.innerWidth <= 1300) sliderStart();

  // wheel event
  window.addEventListener('wheel', (e) => {
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
    touchEndY = e.changedTouches[0].pageY;
    touchEndX = e.changedTouches[0].pageX;

    if($modal1.classList.contains('on')) return;

    // full page
    fullPageEffect('touch', e, touchStartY, touchEndY);

    // slider
    if(window.innerWidth <= 1300) sliderMB(touchStartX, touchEndX);
  });

  // resize
  window.addEventListener('resize', () => {
    // full page
    fullResize();

    // slider
    sliderUpdate();

    // topBtn
    topBtnPos();
  });
});
