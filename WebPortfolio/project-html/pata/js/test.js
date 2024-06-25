window.onload = function() {
  let headerMBtn = document.querySelector('.headerM-buttonWrap');
  let headerMMenu = document.querySelector('.headerM-menuWrap');
  let footer = document.querySelector('.footer');
  let bannerM = document.querySelector('.banner-video-max768px');
  let introApp = document.querySelector('.introduceApp-max768px');
  let introPro = document.querySelector('.introduceProduct-max768px');
  let sticks = document.querySelectorAll('.stick');
  let stickB = document.querySelector('.stickB > div');

  headerMBtn.addEventListener('click', function(){
    headerMMenu.classList.toggle('opacity');

    sticks[0].classList.toggle('opacityZ');
    sticks[2].classList.toggle('opacityZ');
    sticks[1].classList.toggle('stickB::after');
    sticks[1].classList.toggle('rotateStick');
    stickB.classList.toggle('rotateStickB');
  });
};