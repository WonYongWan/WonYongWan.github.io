export function header(pageCount) {
  const $header = document.querySelector('header');
  if(pageCount === 1 || pageCount === 2) {
    if(!$header.classList.contains('white')) $header.classList.add('white');
  } else {
    if($header.classList.contains('white')) $header.classList.remove('white');
  }
}