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

const facebookLink = document.querySelector('.contact');

facebookLink.addEventListener('click', () => {
 
    const facebookSection = document.querySelector('#facebook-section');

    facebookSection.scrollIntoView({behavior: 'smooth'});
});


const facebookButton = document.querySelector('.social1 button');
const instagramButton = document.querySelector('.social2 button');
const twitterButton = document.querySelector('.social3 button');


facebookButton.addEventListener('click', () => {
 
    window.open('https://www.facebook.com/');
});

instagramButton.addEventListener('click', () => {
 
    window.open('https://www.instagram.com/');
});

twitterButton.addEventListener('click', () => {

    window.open('https://twitter.com/');
});
