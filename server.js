const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("popupContainer");
const closeBtn = document.getElementById("closeBtn");
const addCookie = document.getElementById("addCookie");
const container = document.getElementById("list");\


function updateSelect(selectId, dataList) {
    const selectBox = document.getElementById(selectId);
    selectBox.innerHTML = ""; // 기존 내용 삭제

    dataList.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        selectBox.appendChild(option);
    });
}

function selectCookie(charKey) {
    const data = cookieData[charKey];

    // 첫 번째 콤보박스 업데이트
    updateSelect('skillComboSelect', data.skillCombos);
    
    // 두 번째 콤보박스 업데이트
    updateSelect('ultComboSelect', data.ultCombos);
}

openBtn.addEventListener ('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener ('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});


addCookie.addEventListener('click', () => {
    const newRow = document.createElement('div');
    newRow.className = 'row';

    newRow.innerHTML = `
    <img src="icon/icon-sns-youtube2.svg">
    <div class="row-text">
      <strong>새로운 아이템</strong><br>
      <small>방금 추가된 항목입니다.</small>
    </div>
    <button class="delete-btn">삭제</button>`;    
    
    container.appendChild(newRow);

    newRow.querySelector('.delete-btn').addEventListener('click', () => {
    newRow.remove();
    });
})

