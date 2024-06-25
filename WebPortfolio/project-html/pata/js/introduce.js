window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY;

  //test에 왔을때 스크롤탑을 0으로 초기화
  let offset = scrollTop - document.querySelector(".introduceApp").offsetTop;

  //가로모드 시행
  if( scrollTop >= document.querySelector('.introduceApp').offsetTop ){
    document.querySelector(".introduceApp-container").style.left = -offset + "px";

    document.querySelector(".introduceApp-container").style.position = "fixed";
    document.querySelector(".contents-box1").style.position = "fixed";
  } else {
    document.querySelector(".introduceApp-container").style.position = "unset";
    document.querySelector(".contents-box1").style.position = "relative";
  }

  //다음요소 offsetTop값에 왔을때 효과
  if ( scrollTop >= document.querySelector(".introduceProduct").offsetTop ){
    document.querySelector(".contents-box1").style.left = "-100vw";
    document.querySelector(".contents-box1").style.transition = "all 1s ease-in-out";
    document.querySelector(".contents-box2").style.left = "-100vw";
    document.querySelector(".contents-box2").style.transition = "all 1s ease-in-out";
    document.querySelector(".introduceProduct-text > h1").style.left = "50%";
    document.querySelector(".introduceProduct-text > h1").style.transition = "all 1s ease-in-out";
  } else {
    document.querySelector(".contents-box1").style.left = "0";
    document.querySelector(".contents-box1").style.transition = "all .5s ease-in-out";
    document.querySelector(".contents-box2").style.left = "0";
    document.querySelector(".contents-box2").style.transition = "all 2s ease-in-out";
    document.querySelector(".introduceProduct-text > h1").style.left = "90%";
    document.querySelector(".introduceProduct-text > h1").style.transition = "all .5s ease-in-out";
  }
});