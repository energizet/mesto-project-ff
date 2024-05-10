export function like(cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
}

export function createCard(cardTemplate, cardData, events) {
    const card = cardTemplate.cloneNode(true);

    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');

    const cardDeleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    cardImage.addEventListener('click', () => events.openCard(cardData));
    cardDeleteButton.addEventListener('click', () => events.removeCard(card));
    cardLikeButton.addEventListener('click', () => events.like(cardLikeButton));

    return card;
}

export function removeCard(card) {
    card.remove();
}
