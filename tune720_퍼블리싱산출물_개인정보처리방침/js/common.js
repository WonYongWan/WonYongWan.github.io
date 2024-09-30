// header element
const $header = document.querySelector('header');
const $headerMenu = document.querySelector('header .menu');
const $headerLis = document.querySelectorAll('header .menu > li');
const $headerAs = document.querySelectorAll('header .menu li > a');
const $headerDepthTwos = document.querySelectorAll('header .menu-two-wrap');
const $headerToggleBtn = document.querySelector('header .toggle');
const $headerTotalMenu = document.querySelector('header .total-menu');
const $headerMobileBackground = document.querySelector('header .header-background');
const $menuBgWrap = document.querySelector('.menu-two-bg-wrap');

// footer element
const $footer = document.querySelector('footer');
const $footerTopBtn = document.querySelector('footer .top-btn');
const $footerSiteLinkWrap = document.querySelector('footer .site-link-wrap');
const $footerSiteLinkWrapPTag = document.querySelector('footer .site-link-wrap > p');
const $footerSiteLinkWrapATags = document.querySelectorAll('footer .site-link-wrap a');

// contents element
const $contents = document.querySelectorAll('.content');
const $details = document.querySelectorAll('.detail');

// heder data
let headerLisIdx = null;
window.addEventListener('load', () => {
  // ------------ header start -----------------
  window.addEventListener('mouseover', (e) => {
    if(window.innerWidth <= 1600) return
    headerReactMouseOver(e);
  });

  $headerToggleBtn.addEventListener('click', () => {
    if(!$headerToggleBtn.classList.contains('on')) {
      hdMenuOn();
  
    } else {
      hdMenuOff();
    }
  });

  $headerMobileBackground.addEventListener('click', () => {
    if($headerToggleBtn.classList.contains('on')) {
      hdMenuOff();
    }
  });

  $headerLis.forEach((elm, idx) => {
    elm.addEventListener('click', () => {
      
      if(headerLisIdx === idx) {
        if(!elm.classList.contains('on')) {
          elm.classList.add('on');
        } else {
          elm.classList.remove('on');
        }
      } else {
        $headerLis.forEach(elm => elm.classList.remove('on'));
        elm.classList.add('on');
      }
      headerLisIdx = idx;
    })
  });

  if(window.innerWidth <= 1600) {
    for(let i = $headerLis.length - 2; i <= $headerLis.length - 1; i++) {
      $headerLis[i].children[0].setAttribute('href', 'javascript:void(0)');
    }
  }
  // ------------ header end -----------------

  // ------------ footer start -----------------
  setTimeout(() => scrollTo(0, 0), 100);

  if($footerTopBtn) {
    $footerTopBtn.addEventListener('click', () => {
      scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    });
  }

  $footerSiteLinkWrapPTag.addEventListener('click', () => {
    if(!$footerSiteLinkWrap.classList.contains('on')) {
      $footerSiteLinkWrap.classList.add('on');
    } else {
      $footerSiteLinkWrap.classList.remove('on');
    }
  });

  $footerSiteLinkWrapATags.forEach(elm => {
    elm.addEventListener('click', () => {
      if($footerSiteLinkWrap.classList.contains('on')) {
        $footerSiteLinkWrap.classList.remove('on');
      }
    });
  });

  window.addEventListener('scroll', () => {
    if($footerTopBtn) topBtnReact();

    // contents effect
    $contents.forEach(elm => {
      if(window.scrollY > elm.offsetTop - (window.innerHeight / 1.5)) {
        if(!elm.classList.contains('on')) elm.classList.add('on');
      }
  
      if(window.scrollY + window.innerHeight <= elm.offsetTop) {
        if(elm.classList.contains('on')) elm.classList.remove('on');
        if(elm.querySelector('.detail') && elm.querySelector('.detail').classList.contains('on')) {
          elm.querySelector('.detail').classList.remove('on');
        } 
      }
    });

    // instability code
    $details.forEach(elm => {
      if(window.scrollY + window.innerHeight <= elm.offsetTop) {
        if(elm.classList.contains('on')) elm.classList.remove('on');
      }
    });
  
    $details.forEach(elm => {
      if(window.scrollY > elm.offsetTop - (window.innerHeight / 1.5)) {
        if(!elm.classList.contains('on')) elm.classList.add('on');
      }
    });
  });

  window.addEventListener('resize', () => {
    // header
    if(window.innerWidth > 1600) {
      if($headerToggleBtn.classList.contains('on')) $headerToggleBtn.classList.remove('on');
      if($headerTotalMenu.classList.contains('on')) $headerTotalMenu.classList.remove('on');
      if($headerMobileBackground.classList.contains('on')) $headerMobileBackground.classList.remove('on');
      if(document.body.classList.contains('fix')) document.body.classList.remove('fix');

      // header 3, 4 a tag link add
      for(let i = $headerLis.length - 2; i <= $headerLis.length - 1; i++) {
        $headerLis[i].children[0].setAttribute('href', `./sub-${i + 1}-1.html`);
      }

    } else if(window.innerWidth <= 1600) {
      // header 3, 4 a tag link remove
      for(let i = $headerLis.length - 2; i <= $headerLis.length - 1; i++) {
        $headerLis[i].children[0].setAttribute('href', 'javascript:void(0)');
      }
    }

    // footer
    if($footerTopBtn) topBtnReact();
  })

  window.addEventListener('click', (e) => {
    if(!e.target.closest('footer .site-link-wrap') && $footerSiteLinkWrap.classList.contains('on')) {
      $footerSiteLinkWrap.classList.remove('on');
    } 
  })
  // ------------ footer end -----------------
});

// header function
function headerReactMouseOver(e) {
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
}

function hdMenuOn() {
  if(!document.body.classList.contains('fix')) document.body.classList.add('fix');
  $headerToggleBtn.classList.add('on');
  if(!$headerMobileBackground.classList.contains('on')) $headerMobileBackground.classList.add('on');
  if(!$headerTotalMenu.classList.contains('on')) $headerTotalMenu.classList.add('on');
}

function hdMenuOff() {
  if(document.body.classList.contains('fix')) document.body.classList.remove('fix');
  $headerToggleBtn.classList.remove('on');
  if($headerMobileBackground.classList.contains('on')) $headerMobileBackground.classList.remove('on');
  if($headerTotalMenu.classList.contains('on')) $headerTotalMenu.classList.remove('on');
}

// component
function tabMenu(off_name, on_name) {
  const offs = document.querySelectorAll(off_name);
  const ons = document.querySelectorAll(on_name);

  offs.forEach(elm => {
    elm.classList.remove('on');
  });

  ons.forEach(elm => {
    elm.classList.add('on');
  })
}

function listMenu(items, item) {
  const $items = document.querySelectorAll(`${items}`);
  const $item = document.querySelector(`${item}`);
  if(!$item.classList.contains('on')) {
    $items.forEach(elm => elm.classList.remove('on'));
    $item.classList.add('on');
  } else if($item.classList.contains('on')) {
    $item.classList.remove('on');
  }
}

// common function
function topBtnReact() {
  if($footerTopBtn.classList.contains('on')) {
    $footerTopBtn.classList.remove('on');
  }

  if(window.innerWidth > 768) {
    if(window.scrollY > 0) {
      if(!$footerTopBtn.classList.contains('on')) {
        $footerTopBtn.classList.add('on');
      }
    } else {
      if($footerTopBtn.classList.contains('on')) {
        $footerTopBtn.classList.remove('on');
      }
    }
  } else if(window.innerWidth <= 768) {
    if(window.scrollY > $footer.offsetTop - window.innerHeight) {
      if(!$footerTopBtn.classList.contains('on')) {
        $footerTopBtn.classList.add('on');
      }
    } else {
      if($footerTopBtn.classList.contains('on')) {
        $footerTopBtn.classList.remove('on');
      }
    }
  }
}

// popup
function popupOn(popupWrap, popup) {
  document.body.classList.add('scrollNone');
  document.querySelector(popupWrap).classList.add('on');
  document.querySelector(popup).classList.add('on');
}

function popupClose(popupWrap, popup) {
  document.body.classList.remove('scrollNone');
  document.querySelector(popupWrap).classList.remove('on');
  document.querySelector(popup).classList.remove('on');
}