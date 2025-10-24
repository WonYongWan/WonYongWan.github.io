// common function
function classToggle(elm) {
  const $item = document.querySelector(elm);

  if (!$item.classList.contains('on')) {
    $item.classList.add('on');
  } else if ($item.classList.contains('on')) {
    $item.classList.remove('on');
  }
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

function elmChange(elm, changeElm) {
  const $item = document.querySelector(elm);
  $item.innerHTML = changeElm.innerHTML;
}

function classRemove(elm, className) {
  const $item = document.querySelector(elm);

  if ($item.classList.contains(className)) $item.classList.remove(className);
}

// popup
function popupOn(popupWrap, popup) {
  document.body.classList.add('scroll-lock');
  document.querySelector(popupWrap).classList.add('on');
  document.querySelector(popup).classList.add('on');
}

function popupClose(popupWrap, popup) {
  document.body.classList.remove('scroll-lock');
  document.querySelector(popupWrap).classList.remove('on');
  document.querySelector(popup).classList.remove('on');
}
