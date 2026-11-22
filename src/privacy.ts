
import sound2 from './assets/sound/sound-2.mp3';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './privacy.scss';
import './componetsOur/aboutLanguage';

const politic = document.querySelector<HTMLElement>('.politic');
const condit = document.querySelector<HTMLElement>('.condit');
const policyWrapper = document.querySelector<HTMLElement>('.wrapper-politic');
const policyPageCount = document.querySelector<HTMLElement>('.policy-page-count');
const back = document.querySelector<HTMLButtonElement>('.back');
// Аудио звук
const clickSound = new Audio(sound2);
clickSound.volume = 0.5;


const showPolicyPage = (page: 1 | 2) => {
    if (!politic || !condit || !policyPageCount) return;
    politic.classList.toggle('slide', page === 2);
    condit.classList.toggle('slide', page === 2);
    policyPageCount.textContent = `${page} / 2`;
    policyWrapper?.scrollTo({ top: 0, behavior: 'smooth' });
};

policyWrapper?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const arrow = target.closest<HTMLButtonElement>('.button-arrow-right, .button-arrow-left');
    if (!arrow) return;

    clickSound.currentTime = 0;
    void clickSound.play().catch(() => undefined);
    showPolicyPage(arrow.classList.contains('button-arrow-right') ? 2 : 1);
});
back?.addEventListener('click', () => {      
        window.location.href = './index.html';       
});
document.documentElement.classList.add('no-animation');
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.documentElement.classList.remove('no-animation');
    });
});

