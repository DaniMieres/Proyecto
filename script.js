const mainTag=document.querySelector('main')

const modalBtn=document.querySelector('button')

const modalInfo=document.createElement('div')

modalInfo.className='box_alert'

modalBtn.addEventListener('click', ()=>{
    mainTag.appendChild(modalInfo)
})


function reloadMyWebPage(){
    location.reload()
}
// seleccionar el enlace "Facebook"
const facebookLink = document.querySelector('.contact');
// agregar un event listener al enlace para que despliegue la sección de Facebook al hacer clic
facebookLink.addEventListener('click', () => {
  // seleccionar la sección de Facebook por su id
    const facebookSection = document.querySelector('#facebook-section');
  // llamar al método scrollIntoView() en la sección de Facebook
    facebookSection.scrollIntoView({behavior: 'smooth'});
});

// seleccionar los botones de redes sociales
const facebookButton = document.querySelector('.social1 button');
const instagramButton = document.querySelector('.social2 button');
const twitterButton = document.querySelector('.social3 button');

// agregar event listener a cada botón
facebookButton.addEventListener('click', () => {
  // abrir enlace de Facebook
    window.open('https://www.facebook.com/');
});

instagramButton.addEventListener('click', () => {
  // abrir enlace de Instagram
    window.open('https://www.instagram.com/');
});

twitterButton.addEventListener('click', () => {
  // abrir enlace de Twitter
    window.open('https://twitter.com/');
});
