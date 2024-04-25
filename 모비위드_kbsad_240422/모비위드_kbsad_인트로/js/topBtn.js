const $topBtn = document.querySelector('.fp_top_btn');

export function topBtn(pageCount) {
  if(pageCount === 2 || pageCount === 4) {
    $topBtn.classList.add('white');
  } else {
    $topBtn.classList.remove('white');
  }
}

$topBtn.addEventListener('click', () => {
  if(document.querySelector('header').classList.contains('white')) {
    document.querySelector('header').classList.remove('white');
  }
})