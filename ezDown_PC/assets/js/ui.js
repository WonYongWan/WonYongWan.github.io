// ------------- common -------------
// class add and remove
const bindTargetClassOnAndOffEvents = ($btn, action) => {
  const targetKey = $btn.dataset.classBtn;

  const $target = document.querySelector(`[data-class-target="${CSS.escape(targetKey)}"]`);
  if (!$target) return;

  if (action === 'open') {
    $target.classList.add('is-active');
  } else if (action === 'close') {
    $target.classList.remove('is-active');
  }
};

(() => {
  const $btns = document.querySelectorAll('[data-class-btn]');

  $btns.forEach(($btn) => {
    const action = $btn.dataset.classAction;
    if (!action) return;

    $btn.addEventListener('click', () => {
      // bind
      bindTargetClassOnAndOffEvents($btn, action);
    });
  });
})();

// class toggle
const bindTargetToggleEvents = ($target) => {
  $target.classList.toggle('is-active');
};

(() => {
  const $btns = document.querySelectorAll('[data-toggle-btn]');
  $btns.forEach(($btn) => {
    const targetKey = $btn.dataset.toggleBtn;
    const targetKeyArray = targetKey.split(' ');

    targetKeyArray.forEach((key) => {
      const $target = document.querySelector(`[data-toggle-target="${CSS.escape(key)}"]`);
      if (!$target) return;

      $btn.addEventListener('click', () => {
        bindTargetToggleEvents($target);
      });
    });
  });
})();
// ------------- /common -------------

// sidebar
const bindSidebarEvents = ($sidebar, $sidebarOpen, $sidebarCloses, $sidebarHides, $sidebarLayouts) => {
  $sidebarOpen.addEventListener('click', () => {
    if (!$sidebar.classList.contains('is-active')) {
      $sidebar.classList.add('is-active');
      $sidebarHides.forEach(($sidebarHide) => $sidebarHide.classList.add('is-hidden'));
      $sidebarLayouts.forEach(($sidebarLayout) => {
        $sidebarLayout.classList.add('is-sidebar-open');
      });
    }
  });

  $sidebarCloses.forEach(($sidebarClose) => {
    $sidebarClose.addEventListener('click', () => {
      if ($sidebar.classList.contains('is-active')) {
        $sidebar.classList.remove('is-active');
        $sidebarHides.forEach(($sidebarHide) => $sidebarHide.classList.remove('is-hidden'));
        $sidebarLayouts.forEach(($sidebarLayout) => {
          $sidebarLayout.classList.remove('is-sidebar-open');
        });
      }
    });
  });
};

(() => {
  const $sidebar = document.querySelector('[data-sidebar]');
  if (!$sidebar) return;

  const $sidebarOpen = document.querySelector('[data-sidebar-open]');
  const $sidebarCloses = document.querySelectorAll('[data-sidebar-close]');
  const $sidebarHides = document.querySelectorAll('[data-sidebar-hide]');
  const $sidebarLayouts = document.querySelectorAll('[data-sidebar-layout]');

  // bind
  bindSidebarEvents($sidebar, $sidebarOpen, $sidebarCloses, $sidebarHides, $sidebarLayouts);
})();

// dropdown
const bindDropdownEvents = ($dropdownBtn) => {
  const dropdownKey = $dropdownBtn.dataset.dropdownName;
  if (!dropdownKey) return;

  const $targetDropdown = document.querySelector(`[data-dropdown="${CSS.escape(dropdownKey)}"]`);
  if (!$targetDropdown) return;

  const $selectBoxs = document.querySelectorAll('[data-dropdown-select-box]');
  const dropdownTypeKey = $dropdownBtn.dataset.dropdownType;

  if ($selectBoxs.length) {
    $selectBoxs.forEach(($selectBox) => {
      $selectBox.classList.remove('is-active');
    });
  }

  if (dropdownTypeKey === 'position-adjustment') {
    const selectBoxKey = $dropdownBtn.dataset.selectBoxName;
    if (!selectBoxKey) return;

    const dropdownRect = $dropdownBtn.getBoundingClientRect();
    const dropdownTop = dropdownRect.top;
    const dropdownLeft = dropdownRect.left;
    const dropdownRight = dropdownRect.right;
    const dropdownHeight = dropdownRect.height;
    const $targetSelectBox = document.querySelector(`[data-dropdown-select-box="${CSS.escape(selectBoxKey)}"]`);

    if (!$targetDropdown.classList.contains('is-active')) {
      $targetSelectBox.classList.add('is-active');
    } else if ($targetDropdown.classList.contains('is-active')) {
      $targetSelectBox.classList.remove('is-active');
    }

    if (dropdownTop + dropdownHeight + 10 + $targetSelectBox.clientHeight < window.innerHeight - 10) {
      $targetSelectBox.style.top = `${dropdownTop + dropdownHeight + 10}px`;
    } else if (dropdownTop + dropdownHeight + 10 + $targetSelectBox.clientHeight >= window.innerHeight - 10) {
      $targetSelectBox.style.top = `${dropdownTop - $targetSelectBox.clientHeight - 10}px`;
    }

    if (dropdownLeft + $targetSelectBox.clientWidth > window.innerWidth - 30) {
      $targetSelectBox.style.left = `${dropdownRight - $targetSelectBox.clientWidth}px`;
    } else {
      $targetSelectBox.style.left = `${dropdownLeft}px`;
    }
  }

  document.querySelectorAll('[data-dropdown]').forEach(($dropdown) => {
    if ($dropdown !== $targetDropdown) $dropdown.classList.remove('is-active');
  });

  if (!$targetDropdown.classList.contains('is-active')) {
    $targetDropdown.classList.add('is-active');
  } else if ($targetDropdown.classList.contains('is-active')) {
    $targetDropdown.classList.remove('is-active');
  }
};

(() => {
  const $dropdownBtns = document.querySelectorAll('[data-dropdown-btn]');
  if (!$dropdownBtns.length) return;

  $dropdownBtns.forEach(($dropdownBtn) => {
    // bind
    $dropdownBtn.addEventListener('click', () => {
      bindDropdownEvents($dropdownBtn);
    });
  });
})();

// popup
const bindPopupOnEvents = ($popupRoot, $onBtn) => {
  if ($onBtn.hasAttribute('data-remove-no-close')) $popupRoot.dataset.popupRoot = '';
  const popupKey = $onBtn.dataset.popupBtnOn;
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

const bindPopupOffEvents = ($popupRoot, $offBtn) => {
  if ($offBtn.hasAttribute('data-remove-no-close')) $popupRoot.dataset.popupRoot = '';
  const popupRootKey = $popupRoot.dataset.popupRoot;
  if (popupRootKey === 'no-close' || !$popupRoot) return;

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
      bindPopupOffEvents($popupRoot, $offBtn);
    });
  });
})();

// toast
let toastTimer = null;

const bindToastOnEvents = ($toastRoot, $onBtn) => {
  const toastKey = $onBtn.dataset.toastBtnOn;
  if (!toastKey || !$toastRoot) return;

  const $targetToast = $toastRoot.querySelector(`[data-toast="${CSS.escape(toastKey)}"]`);
  if (!$targetToast) return;

  const $activeToast = $toastRoot.querySelector('[data-toast].is-active');
  if ($activeToast) {
    $activeToast.classList.remove('is-active');
  }

  $targetToast.classList.add('is-active');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    $targetToast.classList.remove('is-active');
  }, 3000);
};

(() => {
  const $toastRoot = document.querySelector('.toast-root');
  const $toastOnBtns = document.querySelectorAll('[data-toast-btn-on]');
  if (!$toastRoot || !$toastOnBtns.length) return;

  $toastOnBtns.forEach(($onBtn) => {
    $onBtn.addEventListener('click', () => {
      // bind
      bindToastOnEvents($toastRoot, $onBtn);
    });
  });
})();

// onboarding
const bindOnboardingNavEvents = ($onboarding, $steps, $stepNavs, stepLength) => {
  let current = [...$steps].findIndex(($step) => $step.classList.contains('is-active'));
  current++;

  if (current >= stepLength - 1) $onboarding.classList.add('is-last-check');
  if (current > stepLength - 1) current = 0;

  $steps.forEach(($step) => $step.classList.remove('is-active'));
  $stepNavs.forEach(($stepNav) => $stepNav.classList.remove('is-active'));

  $steps[current].classList.add('is-active');
  $stepNavs[current].classList.add('is-active');
};

(() => {
  const $onboardings = document.querySelectorAll('[data-onboarding]');
  if (!$onboardings.length) return;

  $onboardings.forEach(($onboarding) => {
    const $nextBtn = $onboarding.querySelector('[data-next]');
    const $steps = $onboarding.querySelectorAll('[data-step]');
    const $stepNavs = $onboarding.querySelectorAll('[data-step-nav]');
    const stepLength = $steps.length;

    $steps[0].classList.add('is-active');
    $stepNavs[0].classList.add('is-active');

    $nextBtn.addEventListener('click', () => {
      bindOnboardingNavEvents($onboarding, $steps, $stepNavs, stepLength);
    });
  });
})();

// swiper
(() => {
  const $swipers = document.querySelectorAll('[data-swiper]');
  if (!$swipers.length) return;

  $swipers.forEach(($swiper) => {
    const $slider = $swiper.querySelector('[data-swiper-slider]');
    const option = {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 300,
      allowTouchMove: false,
      watchOverflow: false,
      navigation: {
        prevEl: $swiper.querySelector('[data-swiper-prev]'),
        nextEl: $swiper.querySelector('[data-swiper-next]'),
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    };

    new Swiper($slider, option);
  });
})();

// 전역 제어
// dropdown
const handleDropdownOutside = (e) => {
  const $targetEl = e.target;

  if ($targetEl.closest('[data-dropdown-btn]')) return;
  if ($targetEl.closest('[data-dropdown]')) return;
  if ($targetEl.closest('[data-dropdown-select-box]')) return;

  document.querySelectorAll('[data-dropdown].is-active').forEach(($dropdown) => {
    $dropdown.classList.remove('is-active');
  });

  document.querySelectorAll('[data-dropdown-select-box].is-active').forEach(($dropdownSelectBox) => {
    $dropdownSelectBox.classList.remove('is-active');
  });
};

const handleSelectBoxOutside = () => {
  if (!document.querySelector('[data-dropdown-scroll].is-active')) return;

  document.querySelectorAll('[data-dropdown].is-active').forEach(($dropdown) => {
    $dropdown.classList.remove('is-active');
  });

  document.querySelectorAll('[data-dropdown-scroll].is-active').forEach(($dropdownSelectBox) => {
    $dropdownSelectBox.classList.remove('is-active');
  });
};

document.addEventListener('click', (e) => {
  // dropdown
  handleDropdownOutside(e);
});

window.addEventListener('resize', () => {
  // dropdown (selectBox)
  handleSelectBoxOutside();
});

document.querySelector('.main-content').addEventListener('scroll', () => {
  // dropdown (selectBox)
  handleSelectBoxOutside();
});

const $scrollSelectBox = document.querySelector('[data-scroll-select-box]');
if ($scrollSelectBox) {
  $scrollSelectBox.addEventListener('scroll', () => {
    // dropdown (selectBox)
    handleSelectBoxOutside();
  });
}
