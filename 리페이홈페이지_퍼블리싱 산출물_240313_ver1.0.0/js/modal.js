export const $modal1 = document.querySelector('.modal.modal1');
const $modalRemove1 = document.querySelector('.modal.modal1 .remove');
const $modalOnBtn1 = document.querySelector('.pers_info');

export function modal1() {
  $modalOnBtn1.addEventListener('click', () => {
    if(!$modal1.classList.contains('on')) $modal1.classList.add('on');
  });

  $modal1.addEventListener('click', (e) => {
    if(e.target.classList.contains('on')) $modal1.classList.remove('on');
  });

  $modalRemove1.addEventListener('click', () => {
    if($modal1.classList.contains('on')) $modal1.classList.remove('on');
  });
}