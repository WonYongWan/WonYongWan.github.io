const $gaugePrevBtn = document.querySelector('.page2 .gauge_btn .prev');
const $gaugeNextBtn = document.querySelector('.page2 .gauge_btn .next');
const $gaugeImgBoxs = document.querySelectorAll('.page2 .gauge_img_box');
const $gauges = document.querySelectorAll('.page2 .gauge_box li');
let count = 0;
let flag = false;
let gaugeInterval;

export function page2(pageCount, pageWrapTime) {
  if(!flag && pageCount === 1) {
      flag = true;
      setTimeout(() => {
        gaugeReplay();
        gaugeInterval = setInterval(gaugeEffect, 5000);
      }, pageWrapTime);
  } else if(flag && pageCount !== 1) {
    flag = false;
    gaugeRemove()
    clearInterval(gaugeInterval);
  }
  
}

export function page2Mobile(touchStartX, touchEndX, pageCount) {
  if(pageCount !== 1) return;
  if(touchStartX - touchEndX < -50) {
    gaugeLeft();

  } else if(touchStartX - touchEndX > 50) {
    gaugeRight();

  }
}

function gaugeLeft() {
  count -= 1;
  if(count === -1) count = $gaugeImgBoxs.length - 1;
  clearInterval(gaugeInterval);
  gaugeReplay();
  gaugeInterval = setInterval(gaugeEffect, 5000);
}

function gaugeRight() {
  count += 1;
  if(count === $gaugeImgBoxs.length) count = 0;
  clearInterval(gaugeInterval);
  gaugeReplay();
  gaugeInterval = setInterval(gaugeEffect, 5000);
}

function gaugeReplay() {
  gaugeRemove();
  $gauges[count].classList.add('on');
  $gaugeImgBoxs[count].classList.add('on');
}

function gaugeRemove() {
  $gauges.forEach(elm => elm.classList.remove('on'));
  $gaugeImgBoxs.forEach(elm => elm.classList.remove('on'));
}

function gaugeEffect() {
  count += 1;
  if(count === $gaugeImgBoxs.length) count = 0;
  gaugeReplay();
}

function gaugeClick(idx) {
  if(window.innerWidth <= 1150) return;
  count = idx;
  clearInterval(gaugeInterval);
  gaugeReplay();
  gaugeInterval = setInterval(gaugeEffect, 5000);
}

$gauges.forEach((elm, idx) => {
  elm.addEventListener('click', () => gaugeClick(idx));
});

$gaugePrevBtn.addEventListener('click', gaugeLeft);
$gaugeNextBtn.addEventListener('click', gaugeRight);