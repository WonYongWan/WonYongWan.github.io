const $page6 = document.querySelector('.page6');

export function page6Keep(pageCount) {
  if(pageCount === 6) {
    $page6.classList.add('keep');
  } else {
    $page6.classList.remove('keep');
  }
}
