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