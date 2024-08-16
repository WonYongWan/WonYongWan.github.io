const $contents = document.querySelectorAll('.content');
const $details = document.querySelectorAll('.detail');

window.addEventListener('load', () => {
  $contents.forEach(elm => elm.classList.remove('on'));
  document.querySelector('.content1').classList.add('on');

  window.addEventListener('scroll', () => {
    if(window.scrollY >= $contents[0].clientHeight - $header.clientHeight) {
      if(!$header.classList.contains('fix')) {
        $header.classList.add('fix');
        $header.classList.add('white');
      }
    } else {
      if($header.classList.contains('fix')) {
        $header.classList.remove('fix');
        
        if(!$headerMenu.classList.contains('on')) {
          $header.classList.remove('white');
        }
      }
    }

    $contents.forEach(elm => {
      if(window.scrollY > elm.offsetTop - (window.innerHeight / 1.5)) {
        if(!elm.classList.contains('on')) elm.classList.add('on');
      }
  
      if(window.scrollY + window.innerHeight <= elm.offsetTop) {
        if(elm.classList.contains('on')) elm.classList.remove('on');
        if(elm.querySelector('.detail') && elm.querySelector('.detail').classList.contains('on')) {
          elm.querySelector('.detail').classList.remove('on');
        } 
      }
    });
  
    $details.forEach(elm => {
      if(window.scrollY > elm.offsetTop - (window.innerHeight / 1.5)) {
        if(!elm.classList.contains('on')) elm.classList.add('on');
      }
    });
  });
});