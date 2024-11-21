
const images = [
    'bg.jpg',
    'bg2.jpg',
    'bg3.jpg'
  ];
  
  let currentIndex = 0;
  const bgImgElement = document.querySelector('.bg-img');
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; 
    bgImgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
  }
  
  setInterval(changeBackground, 7000);

  document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.content');
    setTimeout(() => {
      content.classList.add('active');
    }, 500);
  });