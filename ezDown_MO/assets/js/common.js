// common function
function classToggle(elm) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
  }
}

function classToggleAndScrollLock(elm) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
    document.body.classList.add('scroll-lock');
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
    document.body.classList.remove('scroll-lock');
  }
}

function freeClassToggle(elm, name) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains(name)) {
    $item.classList.add(name);
  } else if ($item.classList.contains(name)) {
    $item.classList.remove(name);
  }
}

function classOn(elm) {
  const $item = document.querySelector(elm);
  $item.classList.add('on');
}

function classChangeAndToggle(elms, elm) {
  const $items = document.querySelectorAll(elms);
  const $itme = document.querySelector(elm);
  if (!$itme.classList.contains('on')) {
    $items.forEach((elm) => elm.classList.remove('on'));
    $itme.classList.add('on');
  } else {
    $items.forEach((elm) => elm.classList.remove('on'));
  }
}

function textChange(elm, text) {
  const $item = document.querySelector(elm);
  $item.innerText = text.innerText;
}

function elmAndtextToggle(elm, text, onText) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
    $item.innerText = onText;
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
    $item.innerText = text;
  }
}

function elmChange(elm, changeElm) {
  const $item = document.querySelector(elm);
  $item.innerHTML = changeElm.innerHTML;
}

function classRemove(elm, className) {
  const $item = document.querySelector(elm);

  if ($item.classList.contains(className)) $item.classList.remove(className);
}

function nonTargetPopupRemove(e, target, popups) {
  const $popups = document.querySelectorAll(popups);

  if (!e.target.closest(target)) {
    $popups.forEach((elm) => {
      if (elm.classList.contains('on')) elm.classList.remove('on');
    });
  }
}

function tabListAction(btns, btn, conts, cont) {
  const $tabBtns = document.querySelectorAll(btns);
  const $tabBtn = document.querySelector(btn);
  const $tabs = document.querySelectorAll(conts);
  const $tab = document.querySelector(cont);

  $tabBtns.forEach((elm) => {
    if (elm.classList.contains('on')) elm.classList.remove('on');
  });
  $tabs.forEach((elm) => {
    if (elm.classList.contains('on')) elm.classList.remove('on');
  });

  if (!$tabBtn.classList.contains('on')) $tabBtn.classList.add('on');
  if (!$tab.classList.contains('on')) $tab.classList.add('on');
}

function changeInOrderClass(elm, arr) {
  const $elm = document.querySelector(elm);
  let currentCount;
  arr.forEach((className, idx) => {
    if ($elm.classList.contains(className)) {
      currentCount = idx;
      $elm.classList.remove(className);
    }
  });

  currentCount = currentCount + 1;
  if (currentCount >= arr.length) currentCount = 0;
  $elm.classList.add(arr[currentCount]);
}

// video play list
function videoPlayListAction(player, playList, playListArea, size, playScreenBtnIcon) {
  const $player = document.querySelector(player);
  const $playList = document.querySelector(playList);
  const $playListArea = document.querySelector(playListArea);
  const $playScreenBtnIcon = document.querySelector(playScreenBtnIcon);

  if (window.innerWidth < size) {
    classToggleAndScrollLock(player);
    if ($playScreenBtnIcon && $playScreenBtnIcon.classList.contains('on')) $playScreenBtnIcon.classList.remove('on');
  } else if (window.innerWidth >= size) {
    if (!$player.classList.contains('fullscreen-playlist')) {
      $player.classList.add('fullscreen-playlist');
      $playList.classList.add('fullscreen-playlist');
      $playListArea.style.width = `${$playList.clientWidth}px`;
    } else {
      $player.classList.remove('fullscreen-playlist');
      $playList.classList.remove('fullscreen-playlist');
      $playListArea.style.width = '0';
    }
  }
}

function videoPlayListRemove(player, playList, playListArea) {
  const $player = document.querySelector(player);
  const $playList = document.querySelector(playList);
  const $playListArea = document.querySelector(playListArea);

  if ($player.classList.contains('fullscreen-playlist')) {
    $player.classList.remove('fullscreen-playlist');
    $playList.classList.remove('fullscreen-playlist');
    $playListArea.style.width = '0';
  }
}

function resizeVideoPlayListControl(player, playList, playListArea, size) {
  const $player = document.querySelector(player);
  const $playList = document.querySelector(playList);
  const $playListArea = document.querySelector(playListArea);

  if (window.innerWidth < size) {
    if ($player.classList.contains('fullscreen-playlist')) {
      $player.classList.remove('fullscreen-playlist');
      $playList.classList.remove('fullscreen-playlist');
      $playListArea.style.width = '0';
    }
  }
}

// popup
function popupOn(item) {
  document.body.classList.add('scroll-lock');
  document.querySelector(item).classList.add('on');
}

function popupOff(item) {
  let popupOnCount = 0;
  const $popups = document.querySelectorAll('.js-popup');
  $popups.forEach((elm) => {
    if (elm.classList.contains('on')) popupOnCount++;
  });
  if (popupOnCount <= 1) document.body.classList.remove('scroll-lock');
  document.querySelector(item).classList.remove('on');
}

function popupsOffAndTargetOn(items, item, flag) {
  if (flag !== false) document.body.classList.add('scroll-lock');
  const $popups = document.querySelectorAll(items);
  const $target = document.querySelector(item);
  $popups.forEach((elm) => {
    if (elm.classList.contains('on')) elm.classList.remove('on');
  });
  $target.classList.add('on');
}

function popupAndOverlayOn(overlay, item) {
  document.body.classList.add('scroll-lock');
  document.querySelector(overlay).classList.add('on');
  document.querySelector(item).classList.add('on');
}

function popupAndOverlayOff(overlay, item) {
  let popupOnCount = 0;
  const $popups = document.querySelectorAll('.js-popup');
  $popups.forEach((elm) => {
    if (elm.classList.contains('on')) popupOnCount++;
  });
  if (popupOnCount <= 1) document.body.classList.remove('scroll-lock');
  document.querySelector(overlay).classList.remove('on');
  document.querySelector(item).classList.remove('on');
}

function toastOn(item) {
  document.querySelector(item).classList.add('on');
  setTimeout(() => {
    document.querySelector(item).classList.remove('on');
  }, 1000);
}

function inputFocus(elm) {
  const $input = document.querySelector(elm);
  $input.focus();
  $input.setSelectionRange($input.value.length, $input.value.length);
}

function inputFocusAndSelectAll(elm) {
  const $input = document.querySelector(elm);
  $input.focus();
  $input.select();
}

// bar fix on/lock
let elmFixOnClose_LastScrollTop = 0;
function elmFixOnClose(elms, min) {
  if (!elms) return;
  const current = window.scrollY;

  if (current > elmFixOnClose_LastScrollTop && current > min) {
    elms.forEach((elm) => {
      const $elm = document.querySelector(elm);
      if (!$elm.classList.contains('hide')) $elm.classList.add('hide');
    });
  } else if (current < elmFixOnClose_LastScrollTop) {
    elms.forEach((elm) => {
      const $elm = document.querySelector(elm);
      if ($elm.classList.contains('hide')) $elm.classList.remove('hide');
    });
  }

  elmFixOnClose_LastScrollTop = current <= 0 ? 0 : current;
}
