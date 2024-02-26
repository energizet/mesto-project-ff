const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');
const placesList = document.querySelector(".places__list");

function createCard(item) {
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    cardDeleteButton.addEventListener('click', e => removeCard(e.currentTarget));

    return card;
}

function removeCard(card) {
    card.closest('.card').remove()
}

placesList.append(...initialCards.map(createCard));
