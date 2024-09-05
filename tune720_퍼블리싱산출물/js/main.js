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
  });
});