let cardTemplate = document.querySelector("#card-template").content;
let placesList = document.querySelector(".places__list");

placesList.append(...initialCards.map(item => {
    let card = cardTemplate.cloneNode(true);
    let cardTitle = card.querySelector('.card__title');
    let cardImage = card.querySelector('.card__image');
    let cardDeleteButton = card.querySelector('.card__delete-button');

    cardTitle.innerText = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    cardDeleteButton.addEventListener('click', e => e.currentTarget.closest('.card').remove());

    return card;
}));
