
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
  