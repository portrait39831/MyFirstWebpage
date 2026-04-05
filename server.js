const openSet = document.getElementById("openSetting");
const modal = document.getElementById("settingContainer");
const closeSet = document.getElementById("closeSetting");

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