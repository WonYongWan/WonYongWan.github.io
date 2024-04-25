import { specificMove } from './fullPage.js';

const $btn = document.querySelectorAll('.page1 .btn_box a')[0];

export function page1() {
  $btn.addEventListener('click', () => {
    specificMove($btn.dataset.fpnum);
  });
}