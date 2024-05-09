import {openPopup} from "./modal";

export function onLike(card, isLike) {
}

export function createCard(cardTemplate, item, removeCard, onLike, popup) {
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    const popupCaption = popup.querySelector('.popup__caption');
    const popupImage = popup.querySelector('.popup__image');

    cardImage.addEventListener('click', () => {
        popupCaption.textContent = cardTitle.textContent;
        popupImage.src = cardImage.src;
        popupImage.alt = cardImage.alt;

        openPopup(popup);
    });

    const cardDeleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');

    cardDeleteButton.addEventListener('click', () => removeCard(card));
    cardLikeButton.addEventListener('click', () => {
        const isLike = cardLikeButton.classList.toggle('card__like-button_is-active');
        onLike(card, isLike);
    });

    return card;
}

export function removeCard(card) {
    card.remove();
}
