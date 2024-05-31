init();
const $imgWrap = document.querySelector('.img_wrap');
const $imgItems = document.querySelectorAll('.img_wrap > div');
const $prevBtn = document.querySelector('.prev');
const $nextBtn = document.querySelector('.next');
const $imgsListinfo = document.querySelectorAll('.img_list_info > ul > li');
const $playBtn = document.querySelector('.img_list_info > span');
let flag = true;
let count = 1;
let ListCount = 0;
$imgsListinfo[count - 1].classList.add('on');
$imgsListinfo.forEach(elm => elm.addEventListener('click', imgListClickEvent));

// 각 아이템의 width값 배열로 저장 및 초기 셋팅
const imgItemsWidth = [];
$imgItems.forEach(elm => {
  imgItemsWidth.push(elm.clientWidth);
  $imgItems[0].style.transform = `translateX(${-imgItemsWidth[count]}px)`;
  elm.style.transform = `translateX(${-imgItemsWidth[count]}px)`;
  elm.style.transition = '0s';
});
let imgX = -imgItemsWidth[count];

// 무한 재생
let imgInfinityPlay = setInterval(infinityNextImg, 4000);

$prevBtn.addEventListener('click', prevImage);
$nextBtn.addEventListener('click', nextImage);
$playBtn.addEventListener('click', playEvent);

// prev버튼 클릭시 이벤트
function prevImage() {
  const dataBoolean = $playBtn.getAttribute('data-boolean');
  $imgItems.forEach(elm => elm.style.transition = '');
  if(flag === false) return;
  if(dataBoolean === 'true') clearInterval(imgInfinityPlay);
  count--;
  ListCount--;
  flag = false;
  setTimeout(() => {
    imgX += imgItemsWidth[count];
    $imgItems.forEach(elm => elm.style.transform = `translateX(${imgX}px)`);
    if(count === 0) {
      count = $imgItems.length - 2;
      imgX = 0;
      for(let i = 1; i <= $imgItems.length - 2; i++) {imgX -= imgItemsWidth[i]}
      setTimeout(() => {
        $imgItems.forEach(elm => {
          elm.style.transition = '0s'
          elm.style.transform = `translateX(${imgX}px)`;
        });
      }, 300);
      setTimeout(() => {
        $imgItems.forEach(elm => elm.style.transition = '');
      }, 400);
    }
    $imgsListinfo.forEach(elm => elm.classList.remove('on'));
    if(ListCount < 0) {
      ListCount = $imgItems.length - 3;
      $imgsListinfo[ListCount].classList.add('on');
    } else if(ListCount >= 0) {
      $imgsListinfo[ListCount].classList.add('on');
    }
    setTimeout(() => {
      flag = true;
      if(dataBoolean === 'true') imgInfinityPlay = setInterval(infinityNextImg, 4000);
    }, 400);
  }, 100);
}

// next버튼 클릭시 이벤트
function nextImage() {
  const dataBoolean = $playBtn.getAttribute('data-boolean');
  $imgItems.forEach(elm => elm.style.transition = '');
  if(flag === false) return;
  if(dataBoolean === 'true') clearInterval(imgInfinityPlay);
  count++;
  ListCount++;
  flag = false;
  setTimeout(() => {
    imgX -= imgItemsWidth[count];
    $imgItems.forEach(elm => elm.style.transform = `translateX(${imgX}px)`);
    if(count > imgItemsWidth.length - 2) {
      count = 1;
      imgX = -imgItemsWidth[0];
      setTimeout(() => {
        $imgItems.forEach(elm => {
          elm.style.transition = '0s';
          elm.style.transform = `translateX(${imgX}px)`;
        });
      }, 300);
      setTimeout(() => {
        $imgItems.forEach(elm => elm.style.transition = '');
      }, 400);
    } 
    $imgsListinfo.forEach(elm => elm.classList.remove('on'));
    if(ListCount >= $imgItems.length - 2) {
      ListCount = 0;
      $imgsListinfo[ListCount].classList.add('on');
    } else if(ListCount <= $imgItems.length - 3) {
      $imgsListinfo[ListCount].classList.add('on');
    }
    setTimeout(() => {
      flag = true;
      if(dataBoolean === 'true') imgInfinityPlay = setInterval(infinityNextImg, 4000);
    }, 400);
  }, 100);
}

// list버튼 클릭시 이벤트
function imgListClickEvent(e) {
  const dataBoolean = $playBtn.getAttribute('data-boolean');
  if(dataBoolean === 'true') clearInterval(imgInfinityPlay);
  setTimeout(() => {if(dataBoolean === 'true') imgInfinityPlay = setInterval(infinityNextImg, 4000)}, 100);

  const imgIdx = e.target.getAttribute('data-idx');
  count = parseInt(imgIdx);
  ListCount = parseInt(imgIdx - 1);
  imgX = 0;
  for(let i = 1; i <= count; i++) {imgX -= imgItemsWidth[i]}
  $imgItems.forEach(elm => {
    elm.style.transition = ''
    elm.style.transform = `translateX(${imgX}px)`;
  });

  $imgsListinfo.forEach(elm => elm.classList.remove('on'));
  this.classList.add('on');
}

// 이미지 무한 재생 함수
function infinityNextImg() {
  $imgItems.forEach(elm => elm.style.transition = '');
  if(flag === false) return;
  count++;
  ListCount++;
  flag = false;
  setTimeout(() => {
    imgX -= imgItemsWidth[count];
    $imgItems.forEach(elm => elm.style.transform = `translateX(${imgX}px)`);
    if(count > imgItemsWidth.length - 2) {
      count = 1;
      imgX = -imgItemsWidth[0];
      setTimeout(() => {
        $imgItems.forEach(elm => {
          elm.style.transition = '0s';
          elm.style.transform = `translateX(${imgX}px)`;
        });
      }, 300);
      setTimeout(() => {
        $imgItems.forEach(elm => elm.style.transition = '');
      }, 400);
    } 
    $imgsListinfo.forEach(elm => elm.classList.remove('on'));
    if(ListCount >= $imgItems.length - 2) {
      ListCount = 0;
      $imgsListinfo[ListCount].classList.add('on');
    } else if(ListCount <= $imgItems.length - 3) {
      $imgsListinfo[ListCount].classList.add('on');
    }
    setTimeout(() => flag = true, 400);
  }, 100);
}

function playEvent() {
  const dataBoolean = $playBtn.getAttribute('data-boolean');
  if(dataBoolean === 'true') {
    $playBtn.setAttribute('data-boolean', 'false');
    $playBtn.innerText = 'play_circle_filled';
    clearInterval(imgInfinityPlay);
  } else if(dataBoolean === 'false') {
    $playBtn.setAttribute('data-boolean', 'true');
    $playBtn.innerText = 'pause_circle_filled';
    imgInfinityPlay = setInterval(infinityNextImg, 4000);
  }
}

// start
function init() {
  const $imgListInfo = document.querySelector('.img_list_info');
  const $imgWrap = document.querySelector('.img_wrap');
  const $imgItems = document.querySelectorAll('.img_wrap > div');

  // 마지막 이미지를 처음에 배치
  const firstImgLink = $imgItems[$imgItems.length - 1].childNodes[0].getAttribute('src');
  const firstImgAlt = $imgItems[$imgItems.length - 1].childNodes[0].getAttribute('alt');
  const $firstDiv = document.createElement('div');
  const $firstImg = document.createElement('img');
  $firstImg.setAttribute('src', firstImgLink);
  $firstImg.setAttribute('alt', firstImgAlt);
  $firstDiv.append($firstImg);
  $imgWrap.prepend($firstDiv);

  // 첫 이미지를 마지막에 배치
  const lastImgLink = $imgItems[0].childNodes[0].getAttribute('src');
  const lastImgAlt = $imgItems[0].childNodes[0].getAttribute('alt');
  const $lastDiv = document.createElement('div');
  const $lastImg = document.createElement('img');
  $lastImg.setAttribute('src', lastImgLink);
  $lastImg.setAttribute('alt', lastImgAlt);
  $lastDiv.append($lastImg);
  $imgWrap.append($lastDiv);

  // 아이템 index정보 및 재생 버튼 생성
  const $ul = document.createElement('ul');
  for(let i = 1; i <= $imgItems.length; i++) {
    const $li = document.createElement('li');
    $li.setAttribute('data-idx', i);
    $ul.append($li);
  }
  const $span = document.createElement('span');
  $span.setAttribute('class', 'material-icons-outlined');
  $span.setAttribute('data-boolean', 'true');
  $span.innerText = 'pause_circle_filled';
  $imgListInfo.append($ul);
  $imgListInfo.append($span);
}