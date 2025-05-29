// common function
function classToggle(elm) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
  }
}

function thisClassToggle(elm) {
  const $item = elm;

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
  }
}

function classAdd(elm) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) $item.classList.add('on');
}

function textChange(elm, text) {
  const $item = document.querySelector(elm);
  $item.innerText = text.innerText;
}

function classChange(elms, elm) {
  const $items = document.querySelectorAll(elms);
  if (!elm.classList.contains('on')) {
    $items.forEach((elm) => elm.classList.remove('on'));
    elm.classList.add('on');
  }
}

function headerMenuToggle(btn, menu) {
  const $btn = document.querySelector(btn);
  const $menu = document.querySelector(menu);

  if (!$btn.classList.contains('on')) {
    document.body.classList.add('scrollNone');
    $btn.classList.add('on');
    $menu.classList.add('on');
  } else if ($btn.classList.contains('on')) {
    document.body.classList.remove('scrollNone');
    $btn.classList.remove('on');
    $menu.classList.remove('on');
  }
}

function dropDownEffectType1(lists, list, items, item) {
  const $lists = document.querySelectorAll(lists);
  const $list = document.querySelector(list);
  const $items = document.querySelectorAll(items);
  const $item = document.querySelector(item);
  const $itemChild = $item.children[0];

  if (!$list.classList.contains('on')) {
    $lists.forEach((elm) => elm.classList.remove('on'));
    $items.forEach((elm) => (elm.style.height = '0'));
    $list.classList.add('on');
    $item.style.height = `${$itemChild.clientHeight}px`;
  } else if ($list.classList.contains('on')) {
    $list.classList.remove('on');
    $item.style.height = `0`;
  }
}

function selectBoxSizeSetType1(box, child) {
  const $selectBox = document.querySelector(box);
  const $selectBoxChild = $selectBox.querySelector(child);
  $selectBox.style.height = `${
    $selectBox.clientHeight + $selectBoxChild.clientHeight
  }px`;
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
  const $hdMenuBtn = document.querySelector('#hd-menu-btn');
  const $hdDepth1 = document.querySelector('#hd-depth1');
  const $langBtn = document.querySelector('#lang-btn');
  const $langList = document.querySelector('#lang-list');
  const $myEtcBtn = document.querySelector('#my-etc-btn');
  const $myEtcList = document.querySelector('#my-etc-list');
  const $fooTopBtn = document.querySelector('#top-btn');
  const $sReacts = document.querySelectorAll('.s-react');
  // page
  const $contactUs = document.querySelector('.contactUs');
  const $termsOfUse = document.querySelector('.termsOfUse');
  // page element
  const $contactUsSelectBox1 = document.querySelector(
    '.contactUs #select-box1'
  );
  const $contactUsSelectBox2 = document.querySelector(
    '.contactUs #select-box2'
  );
  const $termsOfUseSelectBox = document.querySelector(
    '.termsOfUse #select-box1'
  );

  // s-react load setting
  $sReacts.forEach((elm) => {
    if (elm.offsetTop <= window.innerHeight) elm.classList.add('on');
  });

  // window click event
  window.addEventListener('click', (e) => {
    // common header effect
    if (!e.target.closest('#hd-list3') && $hdDepth1.classList.contains('on')) {
      $hdMenuBtn.classList.remove('on');
      $hdDepth1.classList.remove('on');
    }

    if (!e.target.closest('.lang') && $langList.classList.contains('on')) {
      $langBtn.classList.remove('on');
      $langList.classList.remove('on');
    }

    if (!e.target.closest('.my-etc') && $myEtcList.classList.contains('on')) {
      $myEtcBtn.classList.remove('on');
      $myEtcList.classList.remove('on');
    }

    if ($contactUs) {
      if (
        !e.target.closest('#select-box1') &&
        $contactUsSelectBox1.classList.contains('on')
      ) {
        $contactUsSelectBox1.classList.remove('on');
      }

      if (
        !e.target.closest('#select-box2') &&
        $contactUsSelectBox2.classList.contains('on')
      ) {
        $contactUsSelectBox2.classList.remove('on');
      }
    }

    if ($termsOfUse) {
      if (
        !e.target.closest('#select-box1') &&
        !$termsOfUseSelectBox.classList.contains('on')
      ) {
        $termsOfUseSelectBox.classList.add('on');
      }
    }
  });

  // window scroll event
  window.addEventListener('scroll', () => {
    // footer top btn on/off effect
    if ($fooTopBtn) {
      const wrapHeight = $wrap.clientHeight - window.innerHeight;
      const posY = window.scrollY;

      if ((posY / wrapHeight) * 100 >= 80) {
        if (!$fooTopBtn.classList.contains('on'))
          $fooTopBtn.classList.add('on');
      } else if ((posY / wrapHeight) * 100 < 80) {
        if ($fooTopBtn.classList.contains('on'))
          $fooTopBtn.classList.remove('on');
      }
    }

    // react element
    $sReacts.forEach((elm) => {
      if (window.scrollY > elm.offsetTop - window.innerHeight / 1.5) {
        if (!elm.classList.contains('on')) elm.classList.add('on');
      }

      if (window.scrollY + window.innerHeight <= elm.offsetTop) {
        if (elm.classList.contains('on')) elm.classList.remove('on');
      }
    });
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
