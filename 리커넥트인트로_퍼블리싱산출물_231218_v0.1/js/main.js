// elements
const $wrap = document.querySelector('.wrap');
const $moMenuBtn = document.querySelector('.mo_menu_btn');
const $contsMenu = document.querySelector('.conts_menu');
const $contsMenus = document.querySelectorAll('.conts_menu button');
const $login = document.querySelector('.login');
const $logout = document.querySelector('.logout');
const $userInfo = document.querySelector('.user_info');
const $conts = document.querySelectorAll('.cont');
const $contactBtn = document.querySelector('.contact_btn');
const $scrollTopBtn = document.querySelector('.scroll_top_btn');
const $tabMenus = document.querySelectorAll('.tab_menu button');
const $tabContsImg = document.querySelectorAll('.tab_cont img');
const $footer = document.querySelector('footer');

// contact btn click to contact Us
$contactBtn.addEventListener('click', () => {
  const scrollTop = document.querySelector(`.cont6`).offsetTop;
  scroll({
    top: scrollTop,
    left: 0,
    behavior: 'smooth'
  })
});

// login & logout Effect
$logout.addEventListener('click', () => {
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;
  if (wrapSize <= 1024) {
    $userInfo.classList.remove('on');
    $login.classList.add('on');
  }
  // $userInfo.classList.remove('on');
  // $login.classList.add('on');
});

// 개발 적용시 제거 요청 임시로 login click시 user_info 보여주는 event 입니다.
$login.addEventListener('click', () => {
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;
  if (wrapSize <= 1024) {
    $userInfo.classList.add('on');
    $login.classList.remove('on');
  }
});

// cont2 Effect ===========================================================
// card auto func
const $cardLists = document.querySelectorAll('.ad_info_list > li');
let cardAuto;
let cardAutoEffectCount = 0;
function cardAutoEffect() {
  $cardLists.forEach((elm, idx) => {
    if(elm.classList.contains('on')) {
      tabAutoEffectCount = idx;
    }
  });

  if(tabAutoEffectCount < $cardLists.length - 1) {
    tabAutoEffectCount += 1;
    $cardLists.forEach(elm => elm.classList.remove('on'));
    $cardLists[tabAutoEffectCount].classList.add('on');

  } else if(tabAutoEffectCount === $cardLists.length - 1) {
    tabAutoEffectCount = 0;
    $cardLists.forEach(elm => elm.classList.remove('on'));
    $cardLists[tabAutoEffectCount].classList.add('on');
  }
}

$cardLists.forEach((elm, idx) => {
  elm.addEventListener('mouseover', () => {
    $cardLists.forEach(elm => elm.classList.remove('on'));
    elm.classList.add('on');
    clearInterval(cardAuto);
    cardAutoEffectCount = idx;
  });

  elm.addEventListener('mouseout', () => {
    cardAuto = setInterval(cardAutoEffect, 5000);
  });
});

window.addEventListener('load', () => {
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;
  cardAuto = setInterval(cardAutoEffect, 5000);

  if(wrapSize > 1024) {
    tabAuto = setInterval(tabAutoEffect, 5000);
    $tabMenus.forEach(elm => elm.addEventListener('click', () => tabEffect(elm)));
    
  } else if(wrapSize <= 1024) {
    clearInterval(tabAuto);
    $tabMenus.forEach(elm => elm.removeEventListener('click', () => tabEffect));

    // tab cont pc image to mobile image
    $tabContsImg.forEach((elm, idx) => {
      elm.setAttribute('src', `./images/intro/sec3_m_img0${idx + 1}.png`);
      elm.setAttribute('srcset', `./images/intro/sec3_m_img0${idx + 1}.png 1x, ./images/intro/sec3_m_img0${idx + 1}@2x.png 2x, ./images/intro/sec3_m_img0${idx + 1}@3x.png 3x`)
    });
  }
});

window.addEventListener('resize', () => {
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;

  if(wrapSize > 1024) {
    clearInterval(tabAuto);
    tabAuto = setInterval(tabAutoEffect, 5000);
    $tabMenus.forEach(elm => elm.addEventListener('click', () => tabEffect(elm)));

    // tab cont mobile image to pc image
    $tabContsImg.forEach((elm, idx) => {
      elm.setAttribute('src', `./images/intro/sec3_img0${idx + 1}.png`);
      elm.setAttribute('srcset', `./images/intro/sec3_img0${idx + 1}.png 1x, ./images/intro/sec3_img0${idx + 1}@2x.png 2x, ./images/intro/sec3_img0${idx + 1}@3x.png 3x`)
    });
  } else if(wrapSize <= 1024) {
    clearInterval(tabAuto);
    $tabMenus.forEach(elm => elm.removeEventListener('click', () => tabEffect));

    // tab cont pc image to mobile image
    $tabContsImg.forEach((elm, idx) => {
      elm.setAttribute('src', `./images/intro/sec3_m_img0${idx + 1}.png`);
      elm.setAttribute('srcset', `./images/intro/sec3_m_img0${idx + 1}.png 1x, ./images/intro/sec3_m_img0${idx + 1}@2x.png 2x, ./images/intro/sec3_m_img0${idx + 1}@3x.png 3x`)
    });
  }
});

// tab auto effect
let tabAuto;
let tabAutoEffectCount = 0;
function tabAutoEffect() {
  $tabMenus.forEach((elm, idx) => {
    if(elm.classList.contains('on')) {
      tabAutoEffectCount = idx;
    }
  });

  if(tabAutoEffectCount < $tabMenus.length - 1) {
    tabAutoEffectCount += 1;
    $tabMenus.forEach(elm => elm.classList.remove('on'));
    $tabMenus[tabAutoEffectCount].classList.add('on');

  } else if(tabAutoEffectCount === $tabMenus.length - 1) {
    tabAutoEffectCount = 0;
    $tabMenus.forEach(elm => elm.classList.remove('on'));
    $tabMenus[tabAutoEffectCount].classList.add('on');
  }
}

// tab effect
function tabEffect(elm) {
  clearInterval(tabAuto);
  tabAuto = setInterval(tabAutoEffect, 5000);

  $tabMenus.forEach(elm => elm.classList.remove('on'));
  elm.classList.add('on');
}

// btn click scroll move event
function scrollToEffect(elm, idx) {
  const scrollTop = document.querySelector(`.cont${idx + 3}`).offsetTop;
  const scrollTopMobile = document.querySelector(`.cont${idx + 3}`).offsetTop - document.querySelector('header').clientHeight;
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;

  if(wrapSize > 1024) {
    window.scroll({
      top: scrollTop,
      left: 0,
      behavior: 'smooth'
    });

  } else if(wrapSize <= 1024) {
    window.scroll({
      top: scrollTopMobile,
      left: 0,
      behavior: 'smooth'
    });

    $moMenuBtn.classList.remove('on');
    $contsMenu.classList.remove('on');
  }
  
  // if(wrapSize <= 1024) {
  //   $moMenuBtn.classList.remove('on');
  //   $contsMenu.classList.remove('on');
  // } 
}
$contsMenus.forEach((elm, idx) => elm.addEventListener('click', () => scrollToEffect(elm, idx)));

// mobile btn click event
function moMenuBtnClickEffect() {
  if($moMenuBtn.classList.contains('on')) {
    $moMenuBtn.classList.remove('on');
    $contsMenu.classList.remove('on');
  } else {
    $moMenuBtn.classList.add('on');
    $contsMenu.classList.add('on');
  }
}
$moMenuBtn.addEventListener('click', moMenuBtnClickEffect);

// click to scroll top event
function scrollTopEffect() {
  $contsMenus.forEach(elm => elm.classList.remove('on'));
  if($scrollTopBtn.classList.contains('on')) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
$scrollTopBtn.addEventListener('click', scrollTopEffect);

// hide btn to show btn
function topBtnShowEffect() {
  const wrapSize = document.querySelector('.wrap').getBoundingClientRect().width;
  const scrollYMax = $wrap.clientHeight - (window.innerHeight + $footer.clientHeight);
  const scrollYMaxMobile = $wrap.clientHeight - (window.innerHeight + ($footer.clientHeight / 2));
  if(wrapSize > 1024) {
    if(window.scrollY >= scrollYMax) {
      $scrollTopBtn.style.bottom = `${$footer.clientHeight + 20}px`;
      $scrollTopBtn.classList.add('on');
    } else {
      $scrollTopBtn.style.bottom = `${$footer.clientHeight - 20}px`;
      $scrollTopBtn.classList.remove('on');
    }
  } else if(wrapSize <= 1024) {
    if(window.scrollY >= scrollYMaxMobile) {
      $scrollTopBtn.style.bottom = `${$footer.clientHeight + 20}px`;
      $scrollTopBtn.classList.add('on');
    } else {
      $scrollTopBtn.style.bottom = `${$footer.clientHeight - 20}px`;
      $scrollTopBtn.classList.remove('on');
    }
  }
  
}
window.addEventListener('scroll', topBtnShowEffect);