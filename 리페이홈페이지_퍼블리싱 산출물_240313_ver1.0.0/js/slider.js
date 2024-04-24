const $prevBtn = document.querySelector('.slider_wrap .prev');
const $nextBtn = document.querySelector('.slider_wrap .next');
const $contentWrap = document.querySelector('.content_wrap');
const $slider = document.querySelector('.slider');
let $items = document.querySelectorAll('.slider .item');

let resizeFlag = false;

// infinite slider next move
let infiniteSlider;

// slider posistion info
const itemWidthArray = [];
const transitionInfo = getComputedStyle($slider).transitionDuration;
const transitionNumber = Number(transitionInfo.replace('s', '')) * 1000;
let sliderCount = 1;
let sliderPosX;

// item width update
function itemWidthUpdate() {
  itemWidthArray.length = 0;
  $items.forEach(elm => itemWidthArray.push(elm.clientWidth));
}

// item state update
function itemStateUpdate() {
  $items = document.querySelectorAll('.slider .item');
}

// slider child start setting
const $firstItem = $items[$items.length - 1].cloneNode(true);
const $lastItem = $items[0].cloneNode(true);

// slider width start setting
function sliderWidth() {
  let sliderWidth = 0;
  $items.forEach(elm => {
    elm.style.width = `${$contentWrap.clientWidth}px`;
    sliderWidth += elm.clientWidth;
  });
  $slider.style.width = `${sliderWidth}px`;
}

export function sliderStart() {
  $slider.prepend($firstItem);
  $slider.append($lastItem);
  resizeFlag = true;

  // element state update
  itemStateUpdate();

  // slider width start setting
  sliderWidth();

  // element width update
  itemWidthUpdate();

  // silder position start setting
  sliderPosX = itemWidthArray[sliderCount];
  $slider.style.transform = `translateX(-${sliderPosX}px)`;
}

export function sliderUpdate() {
  if(window.innerWidth <= 1300 && !resizeFlag) {
    $slider.prepend($firstItem);
    $slider.append($lastItem);
    resizeFlag = true;
  }

  if(window.innerWidth > 1300 && resizeFlag) {
    itemStateUpdate();
    $slider.firstChild.remove();
    $slider.lastChild.remove();
    resizeFlag = false;
  }

  if(window.innerWidth <= 1300) {
    // element state update
    itemStateUpdate();

    // slider width start setting
    sliderWidth();
    
    // element width update
    itemWidthUpdate();

    // silder position start setting
    sliderCount = 1;
    sliderPosX = itemWidthArray[sliderCount];
    $slider.style.transform = `translateX(-${sliderPosX}px)`;
    $slider.style.transition = '0s';
}

  if(window.innerWidth > 1300) {
    $items.forEach(elm => elm.style.width = '');
    $slider.style.width = '';
    $slider.style.transform = `translateX(-0px)`;
    $slider.style.transition = '';
}

  // slider transition toggle
  clearInterval(infiniteSlider);
  setTimeout(() => {
    $slider.style.transition = transitionInfo;
  }, transitionNumber + 100);
}

// slider next move
let moveFlag = true;
function sliderNextMove() {
  if(!moveFlag) return;
  moveFlag = false;

  sliderCount += 1;
  sliderPosX += itemWidthArray[sliderCount];
  $slider.style.transform = `translateX(-${sliderPosX}px)`;
  

  if(sliderCount === itemWidthArray.length - 1) {
    sliderCount = 1;
    sliderPosX = itemWidthArray[sliderCount];
    setTimeout(() => {
      $slider.style.transition = '0s';
      $slider.style.transform = `translateX(-${sliderPosX}px)`;
    }, transitionNumber + 50);
    setTimeout(() => $slider.style.transition = transitionInfo, transitionNumber + 100);
  }

  setTimeout(() => moveFlag = true, transitionNumber + 100);
}

// slider prev move
function sliderPrevMove() {
  if(!moveFlag) return;
  moveFlag = false;
  sliderCount -= 1;
  sliderPosX -= itemWidthArray[sliderCount];
  $slider.style.transform = `translateX(-${sliderPosX}px)`;

  if(sliderCount === 0) {
    sliderCount = itemWidthArray.length - 2;
    sliderPosX = 0;
    itemWidthArray.forEach((elm, idx) => {if(idx < sliderCount) sliderPosX += elm});
    setTimeout(() => {
      $slider.style.transition = '0s';
      $slider.style.transform = `translateX(-${sliderPosX}px)`;
    }, transitionNumber + 50);
    setTimeout(() => $slider.style.transition = transitionInfo, transitionNumber + 100);
  }

  setTimeout(() => moveFlag = true, transitionNumber + 100);
}

// slider on / off
export function sliderOnOff(pageCount) {
  if(window.innerWidth > 1300) return;
  clearInterval(infiniteSlider);
  pageCount === 3 ? infiniteSlider = setInterval(() => sliderNextMove(), 3000) : clearInterval(infiniteSlider);
}

// click event
$prevBtn.addEventListener('click', () => {
  if(!moveFlag) return;
  clearInterval(infiniteSlider);
  sliderPrevMove();
  setTimeout(() => infiniteSlider = setInterval(() => sliderNextMove(), 3000), transitionNumber + 100);
});

$nextBtn.addEventListener('click', () => {
  if(!moveFlag) return;
  clearInterval(infiniteSlider);
  sliderNextMove();
  setTimeout(() => infiniteSlider = setInterval(() => sliderNextMove(), 3000), transitionNumber + 100);
});



export function sliderMB(touchStartX, touchEndX) {
  if(touchStartX - touchEndX < -50) {
    if(!moveFlag) return;
    clearInterval(infiniteSlider);
    sliderPrevMove();
    setTimeout(() => infiniteSlider = setInterval(() => sliderNextMove(), 3000), transitionNumber + 100);

  } else if(touchStartX - touchEndX > 50) {
    if(!moveFlag) return;
    clearInterval(infiniteSlider);
    sliderNextMove();
    setTimeout(() => infiniteSlider = setInterval(() => sliderNextMove(), 3000), transitionNumber + 100);
  }
}