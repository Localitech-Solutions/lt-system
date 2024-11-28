function logout() {

    showLoadingScreen();
    
    setTimeout(() => {
        window.location.href = '../login/login.html';

    }, 1000);

}

function openUserManual() {
    alert('Abrir Manual de Usuario');

}

function navigateToAbout() {
    showLoadingScreen();

    setTimeout(() => {
        window.location.href = '../about/about.html';
    }, 1000);


}

function openCopyright() {
    alert('Abrir Derechos de Autor');

}

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '../../public/img1.jpg', 
        '../../public/img2.jpg',
        '../../public/img3.jpg',
        '../../public/img4.jpg'
    ];

    let currentIndex = 0;

    const background = document.getElementById('dynamic-background');
    if (!background) {
        console.error('Error: Contenedor #dynamic-background no encontrado.');
        return;
    }

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        background.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    background.style.backgroundImage = `url('${images[0]}')`; 
    setInterval(changeBackground, 8000); 
});
