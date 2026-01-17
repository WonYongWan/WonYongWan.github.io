// window load event
window.addEventListener('load', () => {
  // window scrollY position setting
  setTimeout(() => scrollTo(0, 0), 100);

  // common element
  const $wrap = document.querySelector('.wrap');
  const $secMoveList = document.querySelector('.sec-move-list');
  const $secMoveListBtns = document.querySelectorAll('.sec-move-list .btn');
  const $scrollTrigger = document.querySelectorAll('.scroll-trigger');
  const $sections = document.querySelectorAll('.sec');

  // js element
  const $jsSplits = document.querySelectorAll('.js-split');

  const splitTypes = {
    'split-char': splitChar,
  };

  $jsSplits.forEach((elm) => {
    const type = elm.dataset.splitType;
    const typeFunc = splitTypes[type];

    if (typeFunc) {
      typeFunc(elm);
    } else {
      console.warn('타입 없음', type);
    }
  });

  // split function list
  function splitChar(jsSplit) {
    const $lines = jsSplit.querySelectorAll('.line');

    $lines.forEach((line) => {
      let delayTime = 0;
      line.innerHTML = '';
      const lineText = line.getAttribute('aria-label');
      const delayCount = Number(line.getAttribute('aria-delay'));

      lineText.split('').forEach((text) => {
        const $span = document.createElement('span');
        $span.innerText = text;
        $span.classList.add('char');
        $span.style.animationDelay = `${delayTime}s`;
        delayTime += delayCount;
        line.appendChild($span);
      });
    });
  }

  function elmStatusReset() {
    // sec-move-list load setting
    if (!$secMoveList.classList.contains('on')) $secMoveList.classList.add('on');

    // scroll-trigger load setting
    $scrollTrigger.forEach((elm) => {
      const rect = elm.getBoundingClientRect();

      if (rect.top <= window.innerHeight) elm.classList.add('on');
    });
  }

  function bindSecMoveListBtnEvents() {
    $secMoveListBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if (idx <= 0) {
          scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {
          const moveTop = $sections[idx - 1].getBoundingClientRect().top - $wrap.getBoundingClientRect().top;

          scrollTo({
            top: moveTop,
            left: 0,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  bindSecMoveListBtnEvents();
  elmStatusReset();

  window.addEventListener('resize', () => {
    elmStatusReset();
  });

  // window scroll event
  let oldScrollTop = window.scrollY;
  window.addEventListener('scroll', () => {
    // sec-move-list scroll setting
    let nowScrollTop = window.scrollY;

    if (oldScrollTop !== nowScrollTop) {
      if ($secMoveList.classList.contains('on')) $secMoveList.classList.remove('on');
      oldScrollTop = nowScrollTop;

      setTimeout(() => {
        if (oldScrollTop === nowScrollTop) {
          if (!$secMoveList.classList.contains('on')) $secMoveList.classList.add('on');
        }
      }, 300);
    }

    $scrollTrigger.forEach((elm) => {
      const rect = elm.getBoundingClientRect();
      const triggerPoint = window.innerHeight;

      const inView = rect.top <= triggerPoint * 0.9;
      const isBottom = window.scrollY + triggerPoint >= document.documentElement.scrollHeight - 2;

      if (inView || isBottom) {
        elm.classList.add('on');
      }

      if (rect.top > triggerPoint) {
        elm.classList.remove('on');
      }
    });
  });
});
