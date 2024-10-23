window.addEventListener('load', () => {
  // common element -------------------------
  const $wrap = document.querySelector('.wrap');
  const $main = document.querySelector('.main');
  const $cont = document.querySelectorAll('.cont');
  const $contOne = document.querySelector('.cont1');
  const $scrollDown = document.querySelector('.scroll-down');
  const $contactLink = document.querySelector('.contact-link');

  // header related element and variable -------------------------
  const $headTitles = document.querySelectorAll('header .title-box p');
  const $headToggleBtn = document.querySelector('header .toggle');
  const $headMenuBG = document.querySelector('header .menu-bg');
  const $headMenuBox = document.querySelector('header .menu-box');
  const $headMenuBoxButtons = document.querySelectorAll('header .menu-box > ul button');
  const $headGauge = document.querySelector('header .gauge');
  let headGaugeLength;

  // footer element -------------------------
  const $foot = document.querySelector('footer');

  // hash -------------------------
  const hash = location.hash;

  if($main) {
    if(hash === '#partners') {
      $wrap.scrollTo({
        top: $cont[3].offsetTop,
        left: 0,
      });

    } else if(hash === '#contactus') {
      $wrap.scrollTo({
        top: $cont[4].offsetTop,
        left: 0,
      });

    }
  }

  // element individual event -------------------------
  $headToggleBtn.addEventListener('click', headerToggle);
  $headMenuBoxButtons.forEach((elm, idx) => elm.addEventListener('click', () => mainHeaderMenuBtn(idx)));
  if($contactLink) $contactLink.addEventListener('click', contactLinkMove);

  // 가로모드 setting -------------------------
  const $scrollBox = document.querySelectorAll('.scroll-box');
  let scrollBoxItemsWidth = {};
  // cont scroll end line
  let contEndLine = {};
  // current percent
  let currentPercent = {};

  $scrollBox.forEach((box, boxIdx) => {
    scrollBoxItemsWidth[boxIdx] = 0;
    currentPercent[boxIdx] = 0;
    const $scrollBoxItems = box.querySelectorAll('.scroll-cont');
    $scrollBoxItems.forEach(item => {
      scrollBoxItemsWidth[boxIdx] += Number(getComputedStyle(item).width.replace(/([^0-9.])/g, ''));
    });

    if(scrollBoxItemsWidth[boxIdx] > box.closest('.cont').clientWidth) {
      box.classList.add('horizontal');

      if(boxIdx === 0) {
        contEndLine[boxIdx] = ((scrollBoxItemsWidth[boxIdx] - box.closest('.cont').clientWidth) * 2.5) - window.innerHeight;
        box.closest('.cont').style.height = `${(scrollBoxItemsWidth[boxIdx] - box.closest('.cont').clientWidth) * 2.5}px`;
      } else if(boxIdx === 1) {
        contEndLine[boxIdx] = ((scrollBoxItemsWidth[boxIdx] - box.closest('.cont').clientWidth) * 1.5) - window.innerHeight;
        box.closest('.cont').style.height = `${(scrollBoxItemsWidth[boxIdx] - box.closest('.cont').clientWidth) * 1.5}px`;
      }

      box.style.width = `${scrollBoxItemsWidth[boxIdx] - box.closest('.cont').clientWidth}px`;
    }
    box.style.display = `flex`;
  });

  // conts height setting -------------------------
  const $conts = document.querySelector('.wrap .conts');
  headGaugeLength = ($conts.clientHeight + $foot.clientHeight) - $wrap.clientHeight;

  // loaded window is add 'on' class to cont1
  $contOne.classList.add('on');
  
  // scroll event -------------------------
  $wrap.addEventListener('scroll', () => {
    if($main) {
      // header title change
      let contIdxInfo;
      let contFixIdx;
      $cont.forEach((elm, idx) => {
        if($wrap.scrollTop > elm.offsetTop - (window.innerHeight / 3)) {
          contIdxInfo = idx;
        }
      });
      if(contIdxInfo !== contFixIdx) {
        contFixIdx = contIdxInfo;
        $headTitles.forEach(elm => elm.classList.remove('on'));
        $headTitles[contFixIdx].classList.add('on');
      }

      // header gauge event
      $headGauge.style.width = `${($wrap.scrollTop / headGaugeLength) * 100}vw`;

      // scroll down on/off event
      if($scrollDown) {
        if($wrap.scrollTop > 0) {
          if(!$scrollDown.classList.contains('off')) $scrollDown.classList.add('off');
        } else if($wrap.scrollTop === 0) {
          if($scrollDown.classList.contains('off')) $scrollDown.classList.remove('off');
        }
      }

      // 가로모드 scroll event
      $scrollBox.forEach((box, boxIdx) => {
        if(!box.classList.contains('horizontal')) return;
        if(box.closest('.cont').getBoundingClientRect().top <= 0) {
          currentPercent[boxIdx] = (box.closest('.cont').getBoundingClientRect().top / contEndLine[boxIdx]) * 100;

          box.style.transform = `translateX(-${Math.abs(currentPercent[boxIdx]) * 1.5}%)`;

          if(Math.abs(currentPercent[boxIdx]) > 100 || Math.abs(currentPercent[boxIdx]) * 1.5 > 100) box.style.transform = `translateX(-100%)`;
          // scroll-text-wrap position fixed effect
          box.closest('.cont').querySelector('.scroll-text-wrap').classList.add('fix');

          if(box.closest('.cont').querySelector('.contact-link')) box.closest('.cont').querySelector('.contact-link').classList.add('fix');
          
          if(Math.abs(currentPercent[boxIdx]) > 100) {
            if(box.closest('.cont').querySelector('.contact-link')) box.closest('.cont').querySelector('.contact-link').classList.add('hidden');

          } else if(Math.abs(currentPercent[boxIdx]) <= 100) {
            if(box.closest('.cont').querySelector('.contact-link')) box.closest('.cont').querySelector('.contact-link').classList.remove('hidden');

          }

        } else if(box.closest('.cont').getBoundingClientRect().top > 0) {
          box.style.transform = `translateX(0%)`;

          // scroll-text-wrap position fixed effect
          box.closest('.cont').querySelector('.scroll-text-wrap').classList.remove('fix');

          if(box.closest('.cont').querySelector('.contact-link')) {box.closest('.cont').querySelector('.contact-link').classList.remove('fix')};
          
        }
      });
    }
  });

  // function list -------------------------
  function headerToggle() {
    if(!$headToggleBtn.classList.contains('on')) {
      $wrap.classList.add('hidden');
      $headToggleBtn.classList.add('on');
      $headMenuBG.classList.add('on');
      $headMenuBox.classList.add('on');

    } else if($headToggleBtn.classList.contains('on')) {
      $wrap.classList.remove('hidden');
      $headToggleBtn.classList.remove('on');
      $headMenuBG.classList.remove('on');
      $headMenuBox.classList.remove('on');
    }
  }

  function mainHeaderMenuBtn(idx) {
    if($main) {
      if(idx === 2 || idx === 3) {
        $wrap.classList.remove('hidden');
        $headToggleBtn.classList.remove('on');
        $headMenuBG.classList.remove('on');
        $headMenuBox.classList.remove('on');

        if(idx === 2) {
          $wrap.scrollTo({
            top: $cont[3].offsetTop,
            left: 0,
          });

        } else if(idx === 3) {
          $wrap.scrollTo({
            top: $cont[4].offsetTop,
            left: 0,
          });

        }
      }
    }
  }

  function contactLinkMove() {
    if($main) {
      $wrap.scrollTo({
        top: $cont[4].offsetTop,
        left: 0,
      });
    }
  }
});