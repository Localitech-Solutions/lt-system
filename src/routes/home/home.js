function logout() {
    alert('Cerrar sesión'); 

}

function openUserManual() {
    alert('Abrir Manual de Usuario');

}

function openAbout() {
    alert('Abrir página About');

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
