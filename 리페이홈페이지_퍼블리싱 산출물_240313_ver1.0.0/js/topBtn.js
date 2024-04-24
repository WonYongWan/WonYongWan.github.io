import { valueReset } from './fullEvent.js';

const $topBtn = document.querySelector('.topBtn');

export function topBtnPos() {
  const $footer = document.querySelector('footer');
  if(window.innerWidth > 1000) {
    $topBtn.style.bottom = `${$footer.clientHeight + 40}px`;

  } else if(window.innerWidth <= 1000 && window.innerWidth > 768) {
    $topBtn.style.bottom = `${$footer.clientHeight - 90}px`;
  } else if(window.innerWidth <= 768) {
    $topBtn.style.bottom = `${$footer.clientHeight - 62}px`;
  }
}

export function topBtnOnOff(pageCount, pageLength) {
  if(pageCount === pageLength - 1) {
    $topBtn.classList.add('on');
  } else {
    $topBtn.classList.remove('on');
  }
}


$topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  valueReset();
  $topBtn.classList.remove('on');
});