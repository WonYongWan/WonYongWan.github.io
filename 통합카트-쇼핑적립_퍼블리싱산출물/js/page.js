// sub-1
const $sub1 = document.querySelector('.sub-1');
const $sub1ToolTipBoxs = document.querySelectorAll('.sub-1 .point-info .tool-tip-box');

// sub-3
const $sub3 = document.querySelector('.sub-3');
const $sub3ListWrapBox = document.querySelector('.sub-3 .list-wrap-box');
const $sub3ListWrapBoxFirstList = document.querySelector('.sub-3 .list-wrap-box .first-list');
const $sub3ListWrapBoxListWrap = document.querySelector('.sub-3 .list-wrap-box .list-wrap');
const $sub3ListWrapBoxListWrapLists = document.querySelectorAll('.sub-3 .list-wrap-box .list-wrap .list');

// sub-4
const $sub4 = document.querySelector('.sub-4');

window.addEventListener('load', () => {
  // sub-1
  if($sub1) {
    $sub1.addEventListener('click', (e) => {
      if(e.target.closest('.tool-tip')) return;
      if(e.target.tagName.toLowerCase() !== 'button') {
        $sub1ToolTipBoxs.forEach(elm => elm.classList.remove('on'));
      }
    });
    
    $sub1ToolTipBoxs.forEach(elm => {
      elm.addEventListener('click', (e) => {
        if(e.target.closest('.tool-tip')) return;
        if(!elm.classList.contains('on')) {
          $sub1ToolTipBoxs.forEach(elm => elm.classList.remove('on'));
          elm.classList.add('on');
        } else if(elm.classList.contains('on')) {
          $sub1ToolTipBoxs.forEach(elm => elm.classList.remove('on'));
        }
      })
    })
  }

  // sub-3
  if($sub3) {
    let listHeight = 0;
    let flag = true;
    $sub3ListWrapBoxFirstList.addEventListener('click', () => {
      if(!$sub3ListWrapBox.classList.contains('on')) {
        if(!flag) return;
        flag = false;
        $sub3ListWrapBox.classList.add('on');
        $sub3ListWrapBoxListWrapLists.forEach(elm => {
          listHeight += Number(getComputedStyle(elm).height.replace(/[^0-9]/g, ""));
        });
        $sub3ListWrapBoxListWrap.style.height = `${listHeight}px`;
        setTimeout(() => {
          $sub3ListWrapBoxListWrap.style.height = '100%';
          listHeight = 0;
          flag = true;
        }, 300);

      } else if($sub3ListWrapBox.classList.contains('on')) {
        if(!flag) return;
        $sub3ListWrapBox.classList.remove('on');
        $sub3ListWrapBoxListWrap.style.height = `${listHeight}px`;
      }
    });
  }

  // $sub-4
  if($sub4) {
    const sub4FormBoxObj = JSON.parse(sessionStorage.getItem('form-box-number'));
    if(sub4FormBoxObj) {
      const $sub4AskElms = document.querySelectorAll(sub4FormBoxObj.askElms);
      const $sub4AskTarget = document.querySelector(sub4FormBoxObj.askTarget);
      const sub4AskText = sub4FormBoxObj.askText;
      const $sub4AskValue = document.querySelector(sub4FormBoxObj.askValue);
      const $sub4FormBoxElms = document.querySelectorAll(sub4FormBoxObj.formBoxElms);
      const $sub4FormBoxTarget = document.querySelector(sub4FormBoxObj.formBoxTarget);

      $sub4AskElms.forEach(elm => elm.classList.remove('on'));
      $sub4AskTarget.classList.add('on');
      $sub4AskValue.innerText = sub4AskText;
      $sub4FormBoxElms.forEach(elm => elm.classList.remove('on'));
      $sub4FormBoxTarget.classList.add('on');
    }
  }
});


// input file
if($inputFile1) {
  const $fileSizeValue = document.querySelector('.file-info .size');
  const $fileList = document.querySelector('.file-list');
  let fileData = sessionStorage.getItem('fileData') ? JSON.parse(sessionStorage.getItem('fileData')) : {};
  let fileListIdx = sessionStorage.getItem('fileListIdx') ? Number(sessionStorage.getItem('fileListIdx')) + 1 : 0;
  let fileTotalSize = sessionStorage.getItem('fileTotalSize') ? Number(sessionStorage.getItem('fileTotalSize')) : 0;
  let fileUnit = sessionStorage.getItem('fileUnit') ? sessionStorage.getItem('fileUnit') : 'Byte';

  if(fileUnit === 'Byte') {
    $fileSizeValue.innerText = (fileTotalSize * 1000000).toFixed(0) + fileUnit;
  } else if(fileUnit === 'KB') {
    $fileSizeValue.innerText = (fileTotalSize * 1000).toFixed(1) + fileUnit;
  } else if(fileUnit === 'MB') {
    $fileSizeValue.innerText = fileTotalSize.toFixed(1) + fileUnit;
  }

  if(Object.keys(fileData).length > 0) {
    for(let i in fileData) {
      $fileList.innerHTML += `
        <div class="list">
          <p class="name">${fileData[i].name}</p>
          <button type="button" class="ico-close type2" data-idx="${i}">삭제</button>
        </div>
      `;
    }
  }

  const $fileListsRemoveBtn = document.querySelectorAll(`.file-list .list > button`);
  $fileListsRemoveBtn.forEach(elm => {
    elm.addEventListener('click', () => fileListRemove(elm));
  });

  let imageType = {
    'image/jpg': 'image/jpg', 
    'image/png': 'image/png', 
    'image/gif': 'image/gif', 
    'application/pdf': 'application/pdf'
  };
  
  let fileDataLengthCount = 0;
  let duplicationCheckFlag = true;
  $inputFile1.addEventListener('change', (e) => {
    for(let i = 0; i < $inputFile1.files.length; i++) {
      if($inputFile1.files[i].type !== imageType[$inputFile1.files[i].type]) {
        alert(`파일 첨부는 JPG / PNG / GIF / PDF 만 가능합니다. ${$inputFile1.files[i].name}은/는 ${$inputFile1.files[i].type.split('/')[1]} 타입이므로 첨부 할 수 없습니다.`);
      }
      if($inputFile1.files[i].type === imageType[$inputFile1.files[i].type]) {
        if(Object.keys(fileData).length > 0) {
          for(let j in fileData) {
            fileDataLengthCount += 1;
            if(fileData[j].name === $inputFile1.files[i].name) duplicationCheckFlag = false;
            if(fileDataLengthCount === Object.keys(fileData).length) {
              if(duplicationCheckFlag) {
                fileDataOnChangeEvent(e, i);
              } else if(!duplicationCheckFlag) {
                alert(`${$inputFile1.files[i].name}와/과 중복되는 이름의 파일이 첨부되어 있습니다. 다른 종류의 파일일 경우 파일명을 변경하여 재첨부 해 주시길 바랍니다.`);
              }
              duplicationCheckFlag = true;
              fileDataLengthCount = 0;
            }
          }
        } else if(Object.keys(fileData).length <= 0) {
          fileDataOnChangeEvent(e, i);
        }
      }
    }
    sessionStorage.setItem('fileUnit', fileUnit);
    sessionStorage.setItem('fileTotalSize', fileTotalSize);
    sessionStorage.setItem('fileData', JSON.stringify(fileData));
  });

  function fileDataOnChangeEvent(e, i) {
    if((fileTotalSize + ($inputFile1.files[i].size * 0.000001)) >= 10) {
      alert(`파일용량이 10MB를 초과 하였습니다. ${$inputFile1.files[i].name}은/는 첨부할 수 없습니다`);
      return
    } else {
      fileTotalSize += ($inputFile1.files[i].size * 0.000001);
    }

    if(fileTotalSize >= 0.001 && fileTotalSize < 1) {
      fileUnit = 'KB';
    } else if(fileTotalSize >= 1) {
      fileUnit = 'MB';
    }

    fileData[fileListIdx] = {
      name: $inputFile1.files[i].name,
      size: $inputFile1.files[i].size,
      type: $inputFile1.files[i].type
    };

    if(fileUnit === 'Byte') {
      $fileSizeValue.innerText = (fileTotalSize * 1000000).toFixed(0) + fileUnit;
    } else if(fileUnit === 'KB') {
      $fileSizeValue.innerText = (fileTotalSize * 1000).toFixed(1) + fileUnit;
    } else if(fileUnit === 'MB') {
      $fileSizeValue.innerText = fileTotalSize.toFixed(1) + fileUnit;
    }

    $fileList.innerHTML += `
      <div class="list">
        <p class="name">${fileData[fileListIdx].name}</p>
        <button type="button" class="ico-close type2" data-idx="${fileListIdx}">삭제</button>
      </div>
    `;

    const $fileListsRemoveBtn = document.querySelectorAll(`.file-list .list > button`);
    $fileListsRemoveBtn.forEach(elm => {
      elm.addEventListener('click', () => fileListRemove(elm, e));
    });

    sessionStorage.setItem('fileListIdx', fileListIdx);
    fileListIdx += 1;
  }

  function fileListRemove(elm, e) {
    fileTotalSize -= (fileData[elm.dataset.idx].size * 0.000001);
    if(Object.keys(fileData).length <= 1) fileTotalSize = 0;

    if(fileTotalSize < 0.001) {
      fileUnit = 'Byte'
    } else if(fileTotalSize >= 0.001 && fileTotalSize < 1) {
      fileUnit = 'KB';
    } else if(fileTotalSize >= 1) {
      fileUnit = 'MB';
    }

    if(fileUnit === 'Byte') {
      $fileSizeValue.innerText = (fileTotalSize * 1000000).toFixed(0) + fileUnit;
    } else if(fileUnit === 'KB') {
      $fileSizeValue.innerText = (fileTotalSize * 1000).toFixed(1) + fileUnit;
    } else if(fileUnit === 'MB') {
      $fileSizeValue.innerText = fileTotalSize.toFixed(1) + fileUnit;
    }

    delete fileData[elm.dataset.idx];
    sessionStorage.setItem('fileUnit', fileUnit);
    sessionStorage.setItem('fileTotalSize', fileTotalSize);
    sessionStorage.setItem('fileData', JSON.stringify(fileData));
    if(e) e.target.value = '';

    elm.closest('.file-list .list').remove();
  }
}