// window load event
window.addEventListener('load', () => {
  // default setting ----------------------------
  // scrollbar size
  (() => {
    const $mainContent = document.querySelector('.main-content');

    if (!$mainContent) return;
    const scrollbarWidth = $mainContent.offsetWidth - $mainContent.clientWidth;

    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  })();

  // mobile height
  setScreen();
  function setScreen() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // window scrollY position setting
  setTimeout(() => scrollTo(0, 0), 100);
  // ---------------------------------------------
});
