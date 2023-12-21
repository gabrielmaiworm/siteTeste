const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnPopupYes = document.getElementById('btnPopupYes');
const btnPopupNo = document.getElementById('btnPopupNo');
const audioPlayer = document.getElementById('audioPlayer');
const phrase = document.getElementById('phrase');
const popupText = document.getElementById('popupText');
const popupOverlay = document.getElementById('popupOverlay');
const container = document.getElementById('container');

let isFirstSimClick = true;

btnYes.addEventListener('click', () => {
    if (isFirstSimClick) {
        audioPlayer.play();
        changeContent();
        isFirstSimClick = false;
    }
});

btnNo.addEventListener('click', () => {
    openPopup();
});

function changeContent() {
    phrase.textContent = "Vish, a friendzone...";
}

btnPopupYes.addEventListener('click', () => {
    popupText.textContent = 'BELEZAAA, NÃO QUERO MAIS SABER TAMBÉM';
    btnPopupYes.style.display = 'none';
    btnPopupNo.textContent = 'Tá bom, vou aceitar';
});

btnPopupNo.addEventListener('click', () => {
    closePopup();
});

function changePhrase() {
    phrase.textContent = "Vish, a friendzone...";
}

function openPopup() {
    popupText.textContent = 'Meu deus Lorena, certeza mesmo?????';
    btnPopupYes.style.display = 'block';
    btnPopupNo.textContent = 'Não';
    popupOverlay.style.display = 'flex';
}

function closePopup() {
    popupOverlay.style.display = 'none';
}

// Restante do seu código...
