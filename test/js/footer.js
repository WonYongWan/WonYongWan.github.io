export function footer() {
  const $footer = document.querySelector('footer');
  const fooHeight = window.innerHeight - (window.innerHeight - $footer.clientHeight);
  console.log(fooHeight)
  $footer.style.height = `${fooHeight}px`;
}