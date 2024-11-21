
const images = ['bg.jpg', 'bg2.jpg', 'bg3.jpg'];
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
  const errorMessage = document.querySelector('#error-message') || document.createElement('p');
  
   
  console.log(form, usernameField, passwordField, errorMessage);
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = usernameField.value.trim();
      const password = passwordField.value.trim();
  
      if (username === 'admin' && password === '1234') {
          console.log('Login exitoso');
          window.location.href = 'routes/home/home.html'; 
      } else {
          console.log('Credenciales incorrectas');
          errorMessage.textContent = 'Usuario o contraseña incorrectos.';
          form.appendChild(errorMessage);
      }
  });
  