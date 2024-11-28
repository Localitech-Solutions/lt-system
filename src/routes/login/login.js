const images = ['../../public/bg.jpg', '../../public/bg2.jpg', '../../public/bg3.jpg'];
let currentIndex = 0;
const bgImgElement = document.querySelector('.bg-img');


function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    bgImgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
}
setInterval(changeBackground, 7000);

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    setTimeout(() => {
        content.classList.add('active');
    }, 500);
});


const passField = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');

showBtn.addEventListener('click', () => {
    if (passField.type === 'password') {
        passField.type = 'text';
        showBtn.textContent = 'HIDE';
    } else {
        passField.type = 'password';
        showBtn.textContent = 'SHOW';
    }
});


const form = document.querySelector('#login-form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

let errorMessage = document.querySelector('#error-message');
if (!errorMessage) {
    errorMessage = document.createElement('p');
    errorMessage.id = 'error-message';
    errorMessage.style.color = '#e53935'; 
    errorMessage.style.fontFamily = 'Poppins, sans-serif'; 
    errorMessage.style.fontSize = 'clamp(0.9rem, 1vw, 1.2rem)'; 
    errorMessage.style.marginTop = '1vh'; 
    errorMessage.style.textAlign = 'center'; 
}


function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');
}


function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    errorMessage.textContent = ''; 

    if (username === 'admin' && password === '1234') {
        console.log('Login exitoso');

        
        showLoadingScreen();

        
        setTimeout(() => {
            window.location.href = '../home/home.html';
        }, 1000); 
    } else {
        console.log('Credenciales incorrectas');
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        
        if (!form.contains(errorMessage)) {
            form.appendChild(errorMessage);
        }
    }
});
