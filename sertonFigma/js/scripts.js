document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector('.card-container');
    const leftArrow = document.getElementById('seta-para-esquerda');
    const rightArrow = document.getElementById('seta-para-direita');

    if (!cardContainer || !leftArrow || !rightArrow) {
        console.error("One or more elements are missing.");
        return;
    }

    rightArrow.addEventListener('click', () => {
        cardContainer.scrollLeft += 250;
    });

    leftArrow.addEventListener('click', () => {
        cardContainer.scrollLeft -= 250;
    });
});

const menuH = document.querySelector('.menu-h-button');
const menupequeno = document.querySelector('.index-nav-telinha');

if (menuH && menupequeno) {
    menuH.addEventListener('click', () => {
      menupequeno.classList.toggle('active');
  });
}

document.addEventListener('click', (event) => {
    if (!menupequeno.contains(event.target) && !menuH.contains(event.target)) {
        menupequeno.classList.remove('active');
    }
});