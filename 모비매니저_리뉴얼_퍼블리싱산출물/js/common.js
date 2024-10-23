function tabMenu(offName, onName) {
  const $offs = document.querySelectorAll(offName);
  const $ons = document.querySelectorAll(onName);

  $offs.forEach(elm => {
    elm.classList.remove('on');
  });

  $ons.forEach(elm => {
    elm.classList.add('on');
  })
}