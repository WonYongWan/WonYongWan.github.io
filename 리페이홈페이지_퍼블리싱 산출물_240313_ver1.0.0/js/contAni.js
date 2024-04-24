export function contAni($pages, pageCount, pageLength) {
  if(pageCount === pageLength - 1) return;
  $pages.forEach(elm => elm.classList.remove('on'));
  setTimeout(() => $pages[pageCount].classList.add('on'), 500);
}