const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("popupContainer");
const closeBtn = document.getElementById("closeBtn");
const gingerBrave = document.getElementById("gingerBrave");
const blueSlushy = document.getElementById("blueSlushy");
const container = document.getElementById("list");


function selectCookie(charKey) {
    const cookie = cookieData[charKey];

    // 새로운 줄(Row) 생성
    const newRow = document.createElement('div');
    newRow.className = 'row';

    // 데이터 안에 있는 콤보 옵션들을 <option> 태그 문자열로 변환
    const skillOptions = cookie.skillCombos.map(s => `<option value="${s}">${s}</option>`).join('');
    const ultOptions = cookie.ultCombos.map(u => `<option value="${u}">${u}</option>`).join('');

    newRow.innerHTML = `
        <img src="icon.png" style="width:40px; height:40px;">
        <div class="row-text">
            <strong>${cookie.name}</strong><br>
            
            <select class="row-select">
                ${skillOptions}
            </select>

            <select class="row-select">
                ${ultOptions}
            </select>
        </div>
        <button class="delete-btn">삭제</button>
    `;

    container.appendChild(newRow);

    // 삭제 버튼 기능
    newRow.querySelector('.delete-btn').addEventListener('click', () => {
        newRow.remove();
    });
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

gingerBrave.addEventListener('click', () => {
    selectCookie('gingerBrave');
});

blueSlushy.addEventListener('click', () => {
    selectCookie('blueSlushy');
});



