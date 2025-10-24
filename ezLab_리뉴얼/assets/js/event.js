// window load event
window.addEventListener('load', () => {
  // default setting ----------------------------
  // mobile height
  setScreen();
  function setScreen() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // window scrollY position setting
  setTimeout(() => scrollTo(0, 0), 100);
  // ---------------------------------------------

  // common element
  const $wrap = document.querySelector('.wrap');
  const $scrollTrigger = document.querySelectorAll('.scroll-trigger');
  const $headerMenuItems = document.querySelectorAll('.header .menu-item');
  const $headerLang = document.querySelector('.header .lang');
  const $headerAcc = document.querySelector('.header .acc');
  const $fooTopBtn = document.querySelector('#top-btn');
  const $dropdownWrapType1s = document.querySelectorAll('.dropdown-wrap.type1');

  // scroll-trigger load setting
  $scrollTrigger.forEach((elm) => {
    if (elm.offsetTop <= window.innerHeight) elm.classList.add('on');
  });

  // window click event
  window.addEventListener('click', (e) => {
    // common header effect
    if (!e.target.closest('.header .menu-item')) {
      $headerMenuItems.forEach((elm) => {
        if (elm.classList.contains('on')) elm.classList.remove('on');
      });
    }

    if (!e.target.closest('.header .lang')) {
      if ($headerLang.classList.contains('on')) $headerLang.classList.remove('on');
    }

    if (!e.target.closest('.header .acc')) {
      if ($headerAcc.classList.contains('on')) $headerAcc.classList.remove('on');
    }

    // dropdown-wrap1 effect
    if ($dropdownWrapType1s.length >= 1) {
      $dropdownWrapType1s.forEach((elm) => {
        if (!e.target.closest('.dropdown-wrap.type1')) {
          if (elm.classList.contains('on')) elm.classList.remove('on');
        }
      });
    }
  });

  // window scroll event
  window.addEventListener('scroll', () => {
    // react element
    $scrollTrigger.forEach((elm) => {
      if (window.scrollY > elm.offsetTop - window.innerHeight / 1.5) {
        if (!elm.classList.contains('on')) elm.classList.add('on');
      }

      if (window.scrollY + window.innerHeight <= elm.offsetTop) {
        if (elm.classList.contains('on')) elm.classList.remove('on');
      }
    });

    // footer top btn on/off effect
    if ($fooTopBtn) {
      const wrapHeight = $wrap.clientHeight - window.innerHeight;
      const posY = window.scrollY;

      if ((posY / wrapHeight) * 100 >= 100) {
        if (!$fooTopBtn.classList.contains('on')) $fooTopBtn.classList.add('on');
      } else if ((posY / wrapHeight) * 100 < 100) {
        if ($fooTopBtn.classList.contains('on')) $fooTopBtn.classList.remove('on');
      }
    }
  });

  // footer top btn click event
  if ($fooTopBtn) {
    $fooTopBtn.addEventListener('click', () => {
      scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
});
