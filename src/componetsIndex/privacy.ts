
import sound2 from '../assets/sound/sound-2.mp3';
import '../componetsOur/aboutLanguage';

const politic = document.querySelector<HTMLElement>('.politic');
const condit = document.querySelector<HTMLElement>('.condit');
const buttonArrowRight = document.querySelector<HTMLButtonElement>('.button-arrow-right');
const buttonArrowLeft = document.querySelector<HTMLButtonElement>('.button-arrow-left');
const back = document.querySelector<HTMLButtonElement>('.back');
const wrapperPolitic = document.querySelector<HTMLElement>('.wrapper-politic');
// Аудио звук
const clickSound = new Audio(sound2);
clickSound.volume = 0.5;




buttonArrowRight?.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    condit?.classList.add('slide');
    politic?.classList.add('slide');
})
buttonArrowLeft?.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    condit?.classList.remove('slide');
    politic?.classList.remove('slide');})
back?.addEventListener('click', () => {      
    if(!wrapperPolitic) return;
        wrapperPolitic.style.display = 'none';       
});
document.documentElement.classList.add('no-animation');
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.documentElement.classList.remove('no-animation');
    });
});

