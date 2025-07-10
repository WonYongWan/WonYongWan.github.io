import { 
  fullPageEffect, 
  fullResize, 
  topBtnFlag, 
  menuFlag, 
  navFlag, 
  specificFlag,
  moveBtnFlag,
  pageCount, 
  pageLength, 
  $menus,
  $navWrap,
  $navs,
  $topBtn,
  $moveBtns,
  pageWrapTime,
} from './fullPage.js';

window.addEventListener('load', () => {
  // wheel event
  window.addEventListener('wheel', (e) => {
    if($hdBG.classList.contains('on')) return;
    if (topBtnFlag || menuFlag || navFlag || specificFlag || moveBtnFlag) return;
    // full page
    fullPageEffect('wheel', e);
    // header type change
    headerTypeChange(pageCount, pageLength);
    // nav type change
    navTypeChange(pageCount);
    // lastPage add keep class
    lastPageKeep(pageCount, pageLength);
  });

  // touch event
  let touchStartY;
  let touchStartX;
  let touchEndY;
  let touchEndX;

  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].pageY;
    touchStartX = e.touches[0].pageX;
  });

  window.addEventListener('touchend', (e) => {
    if($hdBG.classList.contains('on')) return;
    if (topBtnFlag || menuFlag || navFlag || specificFlag || moveBtnFlag) return;
    touchEndY = e.changedTouches[0].pageY;
    touchEndX = e.changedTouches[0].pageX;

    fullPageEffect('touch', e, touchStartY, touchEndY);
    // header type change
    headerTypeChange(pageCount, pageLength);
    // nav type change
    navTypeChange(pageCount);
    // lastPage add keep class
    lastPageKeep(pageCount, pageLength);
  });

  // resize event
  window.addEventListener('resize', () => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag || moveBtnFlag) return;

    fullResize();
  });

  // top btn click event
  $topBtn.addEventListener('click', () => {
    lastPageKeep(pageCount, pageLength);
  });
});

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

window.tabMenu = tabMenu;

// elm event
const $hd = document.querySelector('header');
const $hdToggle = document.querySelector('header .toggle');
const $hdBG = document.querySelector('header .bg');
const $hdMenu = document.querySelector('header .menu');
const $hdMenuList = document.querySelectorAll('header .menu ul li a');

function hdMenuOn() {
  $hdToggle.classList.add('on');
  if(!$hdBG.classList.contains('on')) $hdBG.classList.add('on');
  if(!$hdMenu.classList.contains('on')) $hdMenu.classList.add('on');
}

function hdMenuOff() {
  $hdToggle.classList.remove('on');
  if($hdBG.classList.contains('on')) $hdBG.classList.remove('on');
  if($hdMenu.classList.contains('on')) $hdMenu.classList.remove('on');
}

$hdToggle.addEventListener('click', () => {
  if(!$hdToggle.classList.contains('on')) {
    hdMenuOn();

  } else {
    hdMenuOff();
  }
});

$hdMenuList.forEach(elm => {
  elm.addEventListener('click', () => {
    if($hdToggle.classList.contains('on')) {
      hdMenuOff();
    }
  });
});

$hdBG.addEventListener('click', () => {
  if($hdToggle.classList.contains('on')) {
    hdMenuOff();
  }
});

// header type change
function headerTypeChange(pageCount, pageLength) {
  if(pageCount <= 0) {
    if($hd.classList.contains('type1')) $hd.classList.remove('type1');
    if($hd.classList.contains('type2')) $hd.classList.remove('type2');

  } else if(pageCount > 0 && pageCount < pageLength - 2) {
    if(!$hd.classList.contains('type1')) $hd.classList.add('type1');
    if($hd.classList.contains('type2')) $hd.classList.remove('type2');

  } else if(pageCount >= pageLength - 2) {
    if($hd.classList.contains('type1')) $hd.classList.remove('type1');
    if(!$hd.classList.contains('type2')) $hd.classList.add('type2');

  }
}

// nav type change
function navTypeChange(pageCount) {
  if(pageCount <= 0) {
    if($navWrap.classList.contains('type1')) $navWrap.classList.remove('type1');

  } else {
    if(!$navWrap.classList.contains('type1')) $navWrap.classList.add('type1');

  }
}

$menus.forEach(elm => {
  elm.addEventListener('click', () => {
    headerTypeChange(pageCount, pageLength);
    navTypeChange(pageCount);
  })
});

$topBtn.addEventListener('click', () => {
  headerTypeChange(pageCount, pageLength);
  navTypeChange(pageCount);
});

$moveBtns.forEach(elm => {
  if(elm) {
    elm.addEventListener('click', () => {
      headerTypeChange(pageCount, pageLength);
      navTypeChange(pageCount);
    });
  }
});

$navs.forEach(elm => {
  if(elm) {
    elm.addEventListener('click', () => {
      headerTypeChange(pageCount, pageLength);
      navTypeChange(pageCount);
    });
  }
});

// last page add keep class
const $lastPage = document.querySelector(`.page${pageLength - 1}`);

function lastPageKeep(pageCount, pageLength) {
  if(pageCount === pageLength - 1) {
    if(!$lastPage.classList.contains('keep')) $lastPage.classList.add('keep');
  } else {
    if($lastPage.classList.contains('keep')) $lastPage.classList.remove('keep');
  }
}

// ------------------------------------------------- no fullpage
// window click event
const $selectBox1 = document.querySelector('#select-box1');

window.addEventListener('click', (e) => {
  if (
    !e.target.closest('#select-box1') &&
    $selectBox1.classList.contains('on')
  ) {
    $selectBox1.classList.remove('on');
  }
})