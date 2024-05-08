import '../pages/index.css';
import {initialCards} from './cards';

const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');
const placesList = document.querySelector(".places__list");

function createCard(item, removeCard) {
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    cardDeleteButton.addEventListener('click', () => removeCard(card));

    return card;
}

function removeCard(card) {
    card.remove();
}

placesList.append(...initialCards.map(item => createCard(item, removeCard)));
