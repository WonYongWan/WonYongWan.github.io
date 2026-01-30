// tab
const initTab = ($tabBtns, $tabContents) => {
  $tabBtns[0]?.classList.add('is-active');
  $tabContents[0]?.classList.add('is-active');
};

const bindTabEvents = ($tabBtns, $tabContents) => {
  $tabBtns.forEach(($btn, idx) =>
    $btn.addEventListener('click', () => {
      if ($btn.classList.contains('is-active')) return;

      $tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('is-active');
      });

      $tabContents.forEach((tabContent) => {
        tabContent.classList.remove('is-active');
      });

      $btn.classList.add('is-active');
      $tabContents[idx].classList.add('is-active');
    }),
  );
};

(() => {
  const $tabs = document.querySelectorAll('[data-tab]');
  if (!$tabs.length) return;

  $tabs.forEach(($tab) => {
    const $tabBtns = $tab.querySelectorAll('[data-tab-btn]');
    const $tabContents = $tab.querySelectorAll('[data-tab-content]');

    // init
    initTab($tabBtns, $tabContents);

    // bind
    bindTabEvents($tabBtns, $tabContents);
  });
})();

// dropdown
const bindDropdownEvents = ($dropdown, $dropdownBtn) => {
  $dropdownBtn.addEventListener('click', () => {
    $dropdown.classList.toggle('is-active');
  });
};

(() => {
  const $dropdowns = document.querySelectorAll('[data-dropdown]');
  if (!$dropdowns.length) return;

  $dropdowns.forEach(($dropdown) => {
    const $dropdownBtn = $dropdown.querySelector('[data-dropdown-btn');

    // bind
    bindDropdownEvents($dropdown, $dropdownBtn);
  });
})();

// popup
const bindPopupOnEvents = ($popupRoot, $onBtn) => {
  const popupKey = $onBtn.getAttribute('data-popup-btn-on');
  if (!popupKey || !$popupRoot) return;

  const $targetPopup = document.querySelector(`[data-popup="${CSS.escape(popupKey)}"]`);
  if (!$targetPopup) return;

  document.body.classList.add('scroll-lock');
  $popupRoot.classList.add('is-active');

  const $activePopup = $popupRoot.querySelector('[data-popup].is-active');
  if ($activePopup) {
    $activePopup.classList.remove('is-active');
  }

  $targetPopup.classList.add('is-active');
};

const bindPopupOffEvents = ($popupRoot) => {
  if (!$popupRoot) return;

  document.body.classList.remove('scroll-lock');
  $popupRoot.classList.remove('is-active');

  const $activePopup = $popupRoot.querySelector('[data-popup].is-active');
  if ($activePopup) {
    $activePopup.classList.remove('is-active');
  }
};

(() => {
  const $popupRoot = document.querySelector('.popup-root');
  const $popupOnBtns = document.querySelectorAll('[data-popup-btn-on]');
  const $popupOffBtns = document.querySelectorAll('[data-popup-btn-off]');
  if (!$popupRoot || !$popupOnBtns.length) return;

  $popupOnBtns.forEach(($onBtn) => {
    $onBtn.addEventListener('click', () => {
      // bind
      bindPopupOnEvents($popupRoot, $onBtn);
    });
  });

  $popupOffBtns.forEach(($offBtn) => {
    $offBtn.addEventListener('click', () => {
      // bind
      bindPopupOffEvents($popupRoot);
    });
  });
})();
