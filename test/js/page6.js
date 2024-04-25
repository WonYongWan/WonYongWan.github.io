const $page6 = document.querySelector('.page6');
const $title = document.querySelectorAll('.page6 .title');
const $inputBoxs = document.querySelectorAll('.page6 .input_box');
const $selectBox = document.querySelector('.page6 .custom_select_box');
const $selectBoxText = document.querySelector('.page6 .custom_select_box > span');
const $selectLists = document.querySelectorAll('.page6 .select_list li');

export function page6() {
  $page6.addEventListener('click', (e) => page6Click(e));
  $page6.addEventListener('keyup', (e) => page6Click(e));
  $selectLists.forEach(elm => elm.addEventListener('click', () => selectListsClick(elm)))
}

export function page6Keep(pageCount) {
  if(pageCount === 6) {
    $page6.classList.add('keep');
  } else {
    $page6.classList.remove('keep');
  }
}

function page6Click(e) {
  if(e.target.dataset.num == 6) {
    if(!$selectBox.classList.contains('on')) {
      $selectBox.classList.add('on');
    } else {
      $selectBox.classList.remove('on');
    }
  } else if($selectBox.classList.contains('on')) $selectBox.classList.remove('on');

  $inputBoxs.forEach(elm => {
    if(elm.children[0].value) {
      $title[Number(elm.children[0].dataset.num)].classList.add('completed');
      elm.classList.add('completed');
    } else {
      $title[Number(elm.children[0].dataset.num)].classList.remove('completed');
      elm.classList.remove('completed');
    }
  });
  

  $title.forEach(elm => {
    if(!elm.classList.contains('completed')) {
      elm.classList.remove('on');
    };
  });
  if(e.target.dataset.num && !$title[Number(e.target.dataset.num)].classList.contains('on')) {

    if(e.target.dataset.num == 6 && $selectBox.classList.contains('on')) {
      $title[Number(e.target.dataset.num)].classList.add('on');
    } else if(e.target.dataset.num != 6) {
      $title[Number(e.target.dataset.num)].classList.add('on');
    }
  }
}

function selectListsClick(elm) {
  if($selectBoxText.textContent !== elm.textContent) {
    $selectBoxText.innerText = elm.textContent;
    if(!$title[Number($selectBoxText.dataset.num)].classList.contains('completed')) {
      $title[Number($selectBoxText.dataset.num)].classList.add('completed')
      $selectBox.classList.add('fix');
    }
  }
}