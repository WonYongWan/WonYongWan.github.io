const $loadBox = document.querySelector('.load-box');
const $subTabMenuWrap = document.querySelector('.sub-3 .sub-tab-menu-wrap');
const $subTabMenuTabs = document.querySelectorAll('.sub-3 .sub-tab-menu .tab');

window.addEventListener('load', () => {
  $loadBox.classList.add('on');

  if(window.innerWidth < 520) {
    $subTabMenuTabs.forEach((elm, idx) => {
      if(elm.classList.contains('on')) {
        if(idx > $subTabMenuTabs.length - 3) {
          $subTabMenuWrap.scrollLeft += Number(getComputedStyle($subTabMenuWrap).width.replace(/[^0-9]/g, ""))
        }
      }
    })
  }
});