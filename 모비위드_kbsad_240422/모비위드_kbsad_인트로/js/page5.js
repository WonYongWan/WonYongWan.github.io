const $current = document.querySelector('.page5 .current');
const $gaugeBar = document.querySelector('.page5 .gauge_bar');
let sliderInterval;

export function page5() {
  sliderInterval = setInterval(page5Slider, 100);
  const $slickActive = document.querySelector('.page5 .slick-active');
  $current.innerText = `01`;
  $gaugeBar.style.transform = `translateX(${Number($slickActive.dataset.num * 20)}%)`;
}

function page5Slider() {
  const $slickActive = document.querySelector('.page5 .slick-active');
  $current.innerText = `0${$slickActive.dataset.num}`;
  $gaugeBar.style.transform = `translateX(${Number($slickActive.dataset.num * 20)}%)`;
}

