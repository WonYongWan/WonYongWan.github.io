// window load event
window.addEventListener('load', () => {
  // default setting ----------------------------
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
