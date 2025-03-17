window.addEventListener('load', () => {
  // main element
  const $main = document.querySelector('.main');
  const $mainItem1 = document.querySelectorAll('.main .content1 h2');

  // sub common element
  const $about = document.querySelector('.about');
  const $aboutItem1 = document.querySelectorAll('.about .content1 h2');
  const $porduct = document.querySelector('.product');
  const $porductItem1 = document.querySelectorAll('.product .content1 h2');
  const $location = document.querySelector('.location');
  const $locationItem1 = document.querySelectorAll('.location .content1 h2');

  // main element add class
  if($main) $mainItem1.forEach(elm => elm.classList.add('on'));
  if($about) $aboutItem1.forEach(elm => elm.classList.add('on'));
  if($porduct) $porductItem1.forEach(elm => elm.classList.add('on'));
  if($location) $locationItem1.forEach(elm => elm.classList.add('on'));
});