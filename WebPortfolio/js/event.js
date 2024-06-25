const pointer = document.querySelector('.pointer');
const wrap = document.querySelector('.wrap');
const title = document.querySelector('.wrap > h1');
const colorBlock = document.querySelector('.color_block');
const linkList = document.querySelector('.link_list');
const projectBtn = document.querySelector('.project_link');
const introBtn = document.querySelector('.intro_link');
const changeAni = document.querySelector('.chang_ani');
const introTitle = document.querySelector('.chang_ani > .intro');
const projectTitle = document.querySelector('.chang_ani > .project');
const pageIntro = document.querySelector('.page.intro');
const pageProject = document.querySelector('.page.project');
const introBoxWrap = document.querySelectorAll('.intro_line .box_wrap');
const scrollInfo = document.querySelector('.scroll_info');
const projectLineWrap = document.querySelectorAll('.project_line .line_wrap');
const projectItem = document.querySelectorAll('.project_line .box_wrap .box');
const projectItemCont = document.querySelectorAll('.project_info_wrap');
const projectLink = document.querySelectorAll('.project_info_wrap .content > a > h3');
const projectItemImg = document.querySelectorAll('.project_info_wrap > img');
const projectItemRemoveBtn = document.querySelectorAll('.project_info_wrap > .remove');
const previewModal = document.querySelector('.previewModal');

window.addEventListener('touchmove', touchmoveEvent)
window.addEventListener('wheel', wheelEvent);
window.addEventListener('mousemove', pointerEvent);
window.addEventListener('load', loadEvent);
window.addEventListener('click', clickEvent);
pageIntro.addEventListener('scroll', introScrollEvent);
pageProject.addEventListener('scroll', projectScrollEvent);

let touchmoveEventFlag = true
function touchmoveEvent(e) {
  pointer.style.display = 'none';
  let acc = 1;
  const startEvent = setInterval(() => {
    document.querySelector(`.color_${acc}`).classList.add('remove')
    acc++;
    if (acc > 8) clearInterval(startEvent);

    setTimeout(() => {
      colorBlock.style.display = 'none';
      title.classList.add('skew');
    }, 1800);
    setTimeout(() => {
      title.classList.add('hidden');
    }, 2200);
  }, 200);

  if (touchmoveEventFlag === false) return;
  setTimeout(() => {
    pageIntro.classList.add('on');
    linkList.classList.remove('hide');
    setTimeout(() => {
      introBoxWrap[0].classList.remove('hide');
    }, 200);
  }, 3200);
  touchmoveEventFlag = false;
}

let wheelEventFlag = true;
function wheelEvent(e) {
  let acc = 1;
  if (e.deltaY < 0) return;
  const startEvent = setInterval(() => {
    document.querySelector(`.color_${acc}`).classList.add('remove')
    acc++;
    if (acc > 8) clearInterval(startEvent);

    setTimeout(() => {
      colorBlock.style.display = 'none';
      title.classList.add('skew');
    }, 1800);
    setTimeout(() => {
      title.classList.add('hidden');
    }, 2200);
  }, 200);

  if (wheelEventFlag === false) return;
  setTimeout(() => {
    pageIntro.classList.add('on');
    linkList.classList.remove('hide');
    setTimeout(() => {
      introBoxWrap[0].classList.remove('hide');
    }, 200);
  }, 3200);
  wheelEventFlag = false;
}

function pointerEvent(e) {
  setTimeout(() => {
    pointer.style.top = `${e.clientY - pointer.clientHeight / 2}px`;
    pointer.style.left = `${e.clientX - pointer.clientWidth / 2}px`;
  }, 100);

  if (e.target === title || e.target === projectBtn || e.target === introBtn) {
    pointer.classList.add('scale');
  } else {
    pointer.classList.remove('scale');
  }
}

function loadEvent() {
  let acc = 1;
  const startEvent = setInterval(() => {
    document.querySelector(`.color_${acc}`).classList.add('rotate');
    acc++;
    if (acc > 8) clearInterval(startEvent);
  }, 200);

  title.style.visibility = "hidden";
  setTimeout(() => {
    title.style.visibility = "visible";
    title.style.color = "#fff";
    scrollInfo.style.color = "#fff";
  }, 800)
}

let clickEventFlag = true;
function clickEvent(e) {
  if (e.target === projectBtn) {
    pageIntro.classList.remove('on');
    pageProject.classList.add('on');
    changeAni.classList.add('on');
    changeAni.classList.add('project');
    introBoxWrap[0].classList.add('hide');
    scrollInfo.style.display = 'none';

    if (wrap.classList.contains('white')) {
      wrap.classList.remove('white');
      pointer.classList.remove('black');
      clickEventFlag = false;
    }

    setTimeout(() => {
      projectTitle.classList.add('opacity');
    }, 400);
    setTimeout(() => {
      projectTitle.classList.add('scale');
    }, 1000);
    setTimeout(() => {
      changeAni.classList.remove('on');
      changeAni.classList.remove('project');
      projectTitle.classList.remove('opacity');
      projectTitle.classList.remove('scale');
    }, 3000);
    setTimeout(() => {
      projectLineWrap[0].classList.remove('hide');
    }, 3200)
  }

  if (e.target === introBtn) {
    pageProject.classList.remove('on');
    pageIntro.classList.add('on');
    changeAni.classList.add('on');
    changeAni.classList.add('intro');
    projectLineWrap[0].classList.add('hide');

    if (clickEventFlag === false) {
      wrap.classList.add('white');
      pointer.classList.add('black');
      clickEventFlag = true;
    }

    setTimeout(() => {
      introTitle.classList.add('opacity');
    }, 400);
    setTimeout(() => {
      introTitle.classList.add('scale');
    }, 1000);
    setTimeout(() => {
      changeAni.classList.remove('on');
      changeAni.classList.remove('intro');
      introTitle.classList.remove('opacity');
      introTitle.classList.remove('scale');
      scrollInfo.style.display = 'block';
    }, 3000);
    setTimeout(() => {
      introBoxWrap[0].classList.remove('hide');
    }, 3200)
  }
}

function introScrollEvent(e) {
  if (pageIntro.scrollTop + pageIntro.clientHeight >= pageIntro.scrollHeight) {
    scrollInfo.style.opacity = '0';
  } else {
    scrollInfo.style.opacity = '1';
  }

  for (let i = 1; i < introBoxWrap.length; i++) {
    let elmPos = introBoxWrap[i].offsetTop - introBoxWrap[i].clientHeight;

    if (elmPos < e.target.scrollTop) {
      introBoxWrap[i].classList.remove('hide');
      if (introBoxWrap[i] === introBoxWrap[2]) {
        wrap.classList.add('white');
        pointer.classList.add('black');
      }
    } else {
      introBoxWrap[i].classList.add('hide');
      if (introBoxWrap[i] === introBoxWrap[2]) {
        wrap.classList.remove('white');
        pointer.classList.remove('black');
      }
    }
  }
}

function projectScrollEvent(e) {
  for (let i = 1; i < projectLineWrap.length; i++) {
    let elmPos = projectLineWrap[i].offsetTop - projectLineWrap[i].clientHeight / 2;

    if (elmPos < e.target.scrollTop) {
      projectLineWrap[i].classList.remove('hide');
    } else {
      projectLineWrap[i].classList.add('hide');
    }
  }
}

projectItemImg.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.parentElement.classList.add('on');
    previewModal.classList.add('on');
  });
});

projectItemRemoveBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    projectItemCont.forEach(elm => elm.classList.remove('on'));
    previewModal.classList.remove('on');
  });
});

previewModal.addEventListener('click', () => {
  projectItemCont.forEach(elm => elm.classList.remove('on'));
  previewModal.classList.remove('on');
})