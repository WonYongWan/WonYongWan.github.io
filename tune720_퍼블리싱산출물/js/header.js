const $header = document.querySelector('header');
const $headerMenu = document.querySelector('header .menu');
const $headerAs = document.querySelectorAll('header .menu li > a');
const $headerDepthTwos = document.querySelectorAll('header .menu-two');
const $menuBgWrap = document.querySelector('.menu-two-bg-wrap');

window.addEventListener('mouseover', (e) => {

  if(
    e.target.closest('header .menu')
  ) {
    // header class
    if(!$header.classList.contains('white')) {
      $header.classList.add('white');
    }

    // header menu class
    if(!$headerMenu.classList.contains('on')) {
      $headerMenu.classList.add('on');
    }

    // header menu depth2 class
    if(
      e.target.parentNode.tagName.toLowerCase() == 'li'
    ) {
      if(e.target.nextElementSibling) {
        $headerDepthTwos.forEach(elm => elm.classList.remove('on'));
        $headerAs.forEach(elm => elm.classList.remove('on'));
        e.target.classList.add('on');
        e.target.nextElementSibling.classList.add('on');
        $menuBgWrap.classList.add('on');
      } else if(
        !e.target.nextElementSibling &&
        !e.target.closest('header .menu-two')
      ) {
        $headerDepthTwos.forEach(elm => elm.classList.remove('on'));
        $headerAs.forEach(elm => elm.classList.remove('on'));
        $menuBgWrap.classList.remove('on');
      }
    }
    
  } else if(
    !e.target.closest('header .menu') &&
    !e.target.closest('.menu-two-bg')
  ) {
    // header class
    if(
      $header.classList.contains('white') && 
      !$header.classList.contains('fix')
    ) {
      $header.classList.remove('white');
    }

    // header menu class
    if($headerMenu.classList.contains('on')) {
      $headerMenu.classList.remove('on');
    }

    // header menu depth2 class
    $headerAs.forEach(elm => elm.classList.remove('on'));
    $headerDepthTwos.forEach(elm => elm.classList.remove('on'));
    $menuBgWrap.classList.remove('on');
  }
});