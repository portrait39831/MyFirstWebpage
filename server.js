const openSet = document.getElementById("openSetting");
const modal = document.getElementById("settingContainer");
const closeSet = document.getElementById("closeSetting");
const addCookie = document.getElementById("addCookie");
const container = document.getElementById("imageContainer");

openSet.addEventListener ('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeSet.addEventListener ('click', () => {
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
    const newImg = document.createElement('img');
    newImg.src = 'icon/icon-sns-youtube2.svg';
    newImg.alt = '앙';

    container.appendChild(newImg);
})