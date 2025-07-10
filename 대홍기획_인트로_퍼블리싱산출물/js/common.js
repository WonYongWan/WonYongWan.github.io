// common function
function classToggle(elm) {
  const $item = document.querySelector(elm);

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