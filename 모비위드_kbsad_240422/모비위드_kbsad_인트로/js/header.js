const $header = document.querySelector('header');

export function header(pageCount) {
  if(pageCount === 2 || pageCount === 4) {
    $header.classList.add('white');
  } else {
    $header.classList.remove('white');
  }
}