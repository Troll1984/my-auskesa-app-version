
const template = document.querySelector<HTMLElement>('#template');
const sectionOne = document.querySelector<HTMLElement>('.section-one');
const cardAscetic = document.querySelector<HTMLElement>('.card-ascetic');
const header = document.querySelector<HTMLElement>('.header');
const btnClose = document.querySelector<HTMLElement>('.btn');
const btnClose1 = document.querySelector<HTMLElement>('.btn1');
const infoButton = document.querySelector<HTMLElement>('#info');
const infoSection = document.querySelector<HTMLElement>('.info');
const imgBackground = document.querySelector<HTMLElement>('.img-background');
 const bottomNavigation = document.querySelector<HTMLElement>('.bottom-navigation');



infoButton?.addEventListener('click', () => {
  if (!infoSection || !imgBackground || !btnClose1 || !sectionOne || !cardAscetic || !bottomNavigation ) {
    console.log({ infoSection, imgBackground });
    return;
  }
  sectionOne.style.display = 'block';
  cardAscetic.style.display = 'none';
  infoSection.style.display = 'block';
  imgBackground.style.display = 'none';
  btnClose1.style.display = 'block'; 
  bottomNavigation.style.display = 'none';
});

template?.addEventListener('click', () => {
    if(!template || !sectionOne || !cardAscetic || !header || !btnClose || !bottomNavigation ) return;
    sectionOne.style.display = 'none';
    cardAscetic.style.display = 'block';
    header.style.display = 'none';
    btnClose.style.display = 'block';   
    bottomNavigation.style.display = 'none'; 
});

if (new URLSearchParams(window.location.search).has('showTemplates')) {
  template?.click();
}

btnClose?.addEventListener('click', () => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');   
        if (from === 'buttons') {
            window.location.href = './about.html';
        } else {
           window.location.href = './example.html';
        }  
      
    });

btnClose1?.addEventListener('click', () => {   
    if(!template || !sectionOne || !cardAscetic || !header || !imgBackground || !bottomNavigation ) return;
    sectionOne.style.display = 'none';
    cardAscetic.style.display = 'none';
    header.style.display = 'flex';
    imgBackground.style.display = 'block'; 
    bottomNavigation.style.display = 'flex';
            
})

// Отправляет шаблоны в форму при нажатии на кнопки
document.querySelectorAll<HTMLButtonElement>('.template-use').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCard = button.closest<HTMLElement>('.template-card');
    if (!selectedCard) return;

    document.querySelectorAll('.template-card').forEach((card) => {
      card.classList.remove('selected');
      card.querySelector('.template-use')!.textContent = 'Обрати';
    });   
  });
});
