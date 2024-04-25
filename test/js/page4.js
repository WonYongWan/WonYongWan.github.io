const $btns = document.querySelectorAll('.page4 .btn_box .btn');
const $imgs = document.querySelectorAll('.page4 .img_box .img');
const $textBoxs = document.querySelectorAll('.page4 .text_box_wrap .text_box');
const $texts = document.querySelectorAll('.page4 .fp_scroll_box .center > .text_box p');
const $btnBar = document.querySelector('.page4 .btn_box span');
let btnInterval;

export function page4() {
  $btns[0].classList.add('on');
  $imgs[0].classList.add('on');
  $textBoxs[0].classList.add('on');
  $texts[0].classList.add('on');
  $btnBar.style.width = `${getComputedStyle($btns[0]).width}`;
  btnInterval = setInterval(page4BtnAuto, 5000);
}

export function page4BtnResize() {
  $btns.forEach((elm, idx) => {
    if(elm.classList.contains('on')) {
      console.log
      $btnBar.style.width = `${getComputedStyle(elm).width}`;

      if(idx === 0) {
        $btnBar.style.transform = `translateX(0)`;
      } else if(idx === 1) {
        $btnBar.style.transform = `translateX(${getComputedStyle($btns[0]).width})`;
      }
    }
  })
}

function page4BtnClickEvent(idx) {
  clearInterval(btnInterval);
  btnInterval = setInterval(page4BtnAuto, 5000);
  if(!$btns[idx].classList.contains('on')) {
    $btns.forEach(elm => elm.classList.remove('on'));
    $imgs.forEach(elm => elm.classList.remove('on'));
    $textBoxs.forEach(elm => elm.classList.remove('on'));
    $texts.forEach(elm => elm.classList.remove('on'));
    $btns[idx].classList.add('on');
    $imgs[idx].classList.add('on');
    $textBoxs[idx].classList.add('on');
    $texts[idx].classList.add('on');
    $btnBar.style.width = `${getComputedStyle($btns[idx]).width}`;
    if(idx === 0) {
      $btnBar.style.transform = `translateX(0)`;
    } else if(idx === 1) {
      $btnBar.style.transform = `translateX(${getComputedStyle($btns[0]).width})`;
    }
  }
}

function page4BtnAuto() {
  $imgs.forEach(elm => elm.classList.remove('on'));
  $textBoxs.forEach(elm => elm.classList.remove('on'));
  $texts.forEach(elm => elm.classList.remove('on'));

  $btns.forEach((elm, idx) => {
    if(elm.classList.contains('on')) {
      elm.classList.remove('on');

    } else if(!elm.classList.contains('on')) {
      $btns[idx].classList.add('on');
      $imgs[idx].classList.add('on');
      $textBoxs[idx].classList.add('on');
      $texts[idx].classList.add('on');
      $btnBar.style.width = `${getComputedStyle($btns[idx]).width}`;
      if(idx === 0) {
        $btnBar.style.transform = `translateX(0)`;
      } else if(idx === 1) {
        $btnBar.style.transform = `translateX(${getComputedStyle($btns[0]).width})`;
      }
    }
  });
}

$btns.forEach((elm, idx) => elm.addEventListener('click', () => page4BtnClickEvent(idx)));