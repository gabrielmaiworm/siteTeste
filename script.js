const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', () => {
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;
    const centerX = window.innerWidth / 2 - btnWidth / 2;
    const centerY = window.innerHeight / 2 - btnHeight / 2;

    const randomX = Math.floor(Math.random()*400)
    const randomY = Math.floor(Math.random()*300)

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

const btnYes = document.getElementById('btnYes');

btnYes.addEventListener('click', () => {
    const confettiSettings = { target: 'confetti-canvas', max: 150 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});