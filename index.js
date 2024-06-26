function navigateToPage(){
    window.location.href = 'App.html';
};

function navigateToHome(){
    window.location.href = 'index.html';
};

function navigateToOnsIdee(){
    window.location.href = 'OnsIdee.html';
};

function navigateToOverOns(){
    window.location.href = 'OverOns.html';
};

document.getElementById('burger-menu').onclick = function(){
    const menuContainer = document.getElementById('menu-container');
    const bottomLine = document.getElementById('bottom-line')
    if (menuContainer.classList.contains('show')) {
        menuContainer.classList.remove('show');
        bottomLine.style.marginTop = '2.5px';
    } else {
        menuContainer.classList.add('show');
        bottomLine.style.marginTop = '10px';
    }
}

document.getElementById('playstation-button').addEventListener('click', navigateToPlaystationPage);
document.getElementById('xbox-button').addEventListener('click', navigateToXboxPage);
document.getElementById('nintendo-button').addEventListener('click', navigateToNintendoPage);
document.getElementById('guerrilla-button').addEventListener('click', navigateToGuerrillaPage);
document.getElementById('ubisoft-button').addEventListener('click', navigateToUbisoftPage);
document.getElementById('nbd-button').addEventListener('click', navigateToNbdPage);

// Define the navigation functions
function navigateToPlaystationPage() {
    window.location.href = 'playstation.html';
}

function navigateToXboxPage() {
    window.location.href = 'xbox.html';
}

function navigateToNintendoPage() {
    window.location.href = 'nintendo.html';
}

function navigateToGuerrillaPage() {
    window.location.href = 'guerrilla.html';
}

function navigateToUbisoftPage() {
    window.location.href = 'ubisoft.html';
}

function navigateToNbdPage() {
    window.location.href = 'nbd.html';
}