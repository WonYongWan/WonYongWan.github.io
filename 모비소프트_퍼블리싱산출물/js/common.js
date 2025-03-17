// mobile height
setScreen();
function setScreen() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// window scrollY position setting
setTimeout(() => scrollTo(0, 0), 10);

window.addEventListener('load', () => {
  // header element
  const $header = document.querySelector('header');
  // s-react element
  const $sReacts = document.querySelectorAll('.s-react');

  // s-react load setting
  $sReacts.forEach(elm => {
    if(elm.offsetTop <= (window.innerHeight)) elm.classList.add('on');
  });

  // scroll event
  window.addEventListener('scroll', () => {
    // react header gnb
    if($header) {
      if(window.scrollY > 0) {
        if(!$header.classList.contains('on')) $header.classList.add('on');
      } else if(window.scrollY <= 0) {
        if($header.classList.contains('on')) $header.classList.remove('on');
      }
    }

    // react element
    $sReacts.forEach(elm => {
      if(window.scrollY > elm.offsetTop - (window.innerHeight / 2)) {
        if(!elm.classList.contains('on')) elm.classList.add('on');
      }
  
      if(window.scrollY + window.innerHeight <= elm.offsetTop) {
        if(elm.classList.contains('on')) elm.classList.remove('on');
        
      }
    });
  });
});

// common function
function classToggle(elm) {
  const $item = document.querySelector(elm);

  if(!$item.classList.contains('on')) {
    $item.classList.add('on');

  } else if($item.classList.contains('on')) {
    $item.classList.remove('on');

  }
}

function textChange(elm, text) {
  const $item = document.querySelector(elm);
  $item.innerText = text.innerText;
}

function headerMenuToggle(btn, menu) {
  const $btn = document.querySelector(btn);
  const $menu = document.querySelector(menu);

  if(!$btn.classList.contains('on')) {
    document.body.classList.add('scrollNone');
    $btn.classList.add('on');
    $menu.classList.add('on');

  } else if($btn.classList.contains('on')) {
    document.body.classList.remove('scrollNone');
    $btn.classList.remove('on');
    $menu.classList.remove('on');
  }
}