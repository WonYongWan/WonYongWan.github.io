window.addEventListener('load', () => {
  // main element
  const $main = document.querySelector('.main');
  const $mainItem1 = document.querySelector('.main .content1 h2');

  // sub common element
  const $about = document.querySelector('.about');
  const $aboutItem1 = document.querySelector('.about .content1 h2');
  const $porduct = document.querySelector('.product');
  const $porductItem1 = document.querySelector('.product .content1 h2');
  const $location = document.querySelector('.location');
  const $locationItem1 = document.querySelector('.location .content1 h2');

  // main element add class
  if($main) $mainItem1.classList.add('on');
  if($about) $aboutItem1.classList.add('on');
  if($porduct) $porductItem1.classList.add('on');
  if($location) $locationItem1.classList.add('on');
});