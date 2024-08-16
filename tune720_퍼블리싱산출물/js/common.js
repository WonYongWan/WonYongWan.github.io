const $topBtn = document.querySelector('footer .top-btn');

window.addEventListener('load', () => {
  setTimeout(() => scrollTo(0, 0), 100);

  $topBtn.addEventListener('click', () => {
    scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      if(!$topBtn.classList.contains('on')) {
        $topBtn.classList.add('on');
      }
    } else {
      if($topBtn.classList.contains('on')) {
        $topBtn.classList.remove('on');
      }
    }
  });
});


// component
function tabMenu(off_name, on_name) {
  const offs = document.querySelectorAll(off_name);
  const ons = document.querySelectorAll(on_name);

  offs.forEach(elm => {
    elm.classList.remove('on');
  });

  ons.forEach(elm => {
    elm.classList.add('on');
  })
}