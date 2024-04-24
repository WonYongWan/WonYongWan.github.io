import { sliderOnOff } from './slider.js';
import { header } from './header.js';
import { topBtnOnOff } from './topBtn.js';
import { contAni } from './contAni.js';
import { $modal1 } from './modal.js';

const $pageWrap = document.querySelector('.pageWrap');
const $pages = document.querySelectorAll('.page');
const pageLength = $pages.length;

// element height save
const pageHeights = [];
$pages.forEach(elm => pageHeights.push(elm.clientHeight));
let pageCount = 0;
let pagePos = 0;

// full page
let time = new Date();
let fullFlag = true;
let startFlag = true;
let topDetect = false;
let bottomDetect = false;

export function fullPageEffect(value, event, touchStartY, touchEndY) {
  if(bottomDetect || topDetect) time = new Date().setSeconds(new Date().getSeconds() + 1) - new Date();
  if(new Date() - time > 1000 || startFlag) {
    fullFlag = true;
    time = new Date();

    if($modal1.classList.contains('on')) return;

    if(value === 'wheel') {
      fullPC(event, fullFlag);

    } else if(value === 'touch') {
      fullMB(touchStartY, touchEndY, fullFlag);

    }
    startFlag = false;

  } else {
    fullFlag = false;
  }
}

// value reset
export function valueReset() {
  pageCount = 0;
  pagePos = 0;
  $pageWrap.style.transform = `translateY(${pagePos}px)`;
  $pages.forEach(elm => {
    if(!elm.classList.contains('on')) elm.classList.add('on');
  });
  setTimeout(() => {
    $pages.forEach((elm, idx) => {
      if(idx !== 0) elm.classList.remove('on');
    });
  }, 700);
}

// wheelUp event
function wheelUp() {
  let prevCount = pageCount;
  if(pageCount > 0) {
    pagePos -= pageHeights[pageCount];
    pageCount -= 1;
  } 

  if(prevCount === pageCount) {
    topDetect = true;
    return;
  }

  if(bottomDetect) bottomDetect = false;

  if(pageCount !== pageLength - 2) contAni($pages, pageCount, pageLength);
  sliderOnOff(pageCount);
  header(pageCount);
  topBtnOnOff(pageCount, pageLength);
  $pageWrap.style.transform = `translateY(-${pagePos}px)`;
}

// wheelDown event
function wheelDown() {
  let prevCount = pageCount;
  if(pageCount < pageLength - 1) {
    pageCount += 1;
    pagePos += pageHeights[pageCount];
  }

  if(prevCount === pageCount) {
    bottomDetect = true;
    return;
  }

  if(topDetect) topDetect = false;

  contAni($pages, pageCount, pageLength);
  sliderOnOff(pageCount);
  header(pageCount);
  topBtnOnOff(pageCount, pageLength);
  $pageWrap.style.transform = `translateY(-${pagePos}px)`;
}

// pc fullPage
function fullPC(e, fullFlag) {
  if(!fullFlag) return;
  if(e.wheelDeltaY > 0) {
    wheelUp();

  } else if(e.wheelDeltaY < 0) {
    wheelDown();

  }
}

// mobile fullPage
function fullMB(touchStartY, touchEndY, fullFlag) {
  if(!fullFlag) return;
  if(touchStartY - touchEndY < -50) {
    wheelUp();

  } else if(touchStartY - touchEndY > 50) {
    wheelDown();

  }
}

// resize
export function fullResize() {
  pageHeights.length = 0;
  $pages.forEach(elm => pageHeights.push(elm.clientHeight));
  pagePos = 0;
  $pageWrap.style.transition = '0s';

  if(pageCount === 0) {
    $pageWrap.style.transform = `translateY(-${pagePos}px)`;

  } else if(pageCount === 1) {
    pagePos = pageHeights[1];
    $pageWrap.style.transform = `translateY(-${pagePos}px)`;

  } else if(pageCount > 1) {
    for(let i = 1; i <= pageCount; i++) {
      pagePos += pageHeights[i];
    }
    $pageWrap.style.transform = `translateY(-${pagePos}px)`;

  }

  setTimeout(() => $pageWrap.style.transition = '', 100);
}

