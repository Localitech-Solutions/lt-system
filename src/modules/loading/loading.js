
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden'); 
}


function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden'); 
}


function simulatePageLoad() {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000); 
}


window.addEventListener('beforeunload', showLoadingScreen); 
window.addEventListener('load', hideLoadingScreen); 
