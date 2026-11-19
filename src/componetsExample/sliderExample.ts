
import sound3 from '../assets/sound/sound-3.mp3';
const left = document.querySelector<HTMLButtonElement>('#left');
const right = document.querySelector<HTMLButtonElement>('#right');
const slider = document.querySelector<HTMLElement>('.slider-wrapper');
const clickSound1 = new Audio(sound3);
clickSound1.volume = 0.5;
 

function scrollByCard(direction: -1 | 1): void {
  if (!slider) return;

  const cards = Array.from(slider.querySelectorAll<HTMLElement>('.template-card'));
  if (!cards.length) return;

  const sliderLeft = slider.getBoundingClientRect().left + slider.clientLeft;
  const currentIndex = cards.reduce((closestIndex, card, index) => {
    const closestDistance = Math.abs(cards[closestIndex].getBoundingClientRect().left - sliderLeft);
    const distance = Math.abs(card.getBoundingClientRect().left - sliderLeft);
    return distance < closestDistance ? index : closestIndex;
  }, 0);
  const targetIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
  const targetLeft = slider.scrollLeft + cards[targetIndex].getBoundingClientRect().left - sliderLeft;

  slider.scrollTo({
    left: targetLeft,
    behavior: 'smooth',
  });
}

left?.addEventListener('click', () => {
   clickSound1.currentTime = 0;
   clickSound1.play();
 scrollByCard(-1)
});
right?.addEventListener('click', () => {
  clickSound1.currentTime = 0;
  clickSound1.play();
scrollByCard(1)
});






