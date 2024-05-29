export function createCard(cardTemplate, cardData, events) {
    const card = cardTemplate.cloneNode(true);

    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');

    const cardDeleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    like();

    if (cardData.isCanDelete) {
        cardDeleteButton.classList.add('card__delete-button_visible');
    }

    cardImage.addEventListener('click', () => events.openCard(cardData));
    cardDeleteButton.addEventListener('click', events.removeCard);
    cardLikeButton.addEventListener('click', events.like);

    return [card, removeCard, like];

    function removeCard() {
        card.remove();
    }

    function like() {
        if (cardData.isLike) {
            cardLikeButton.classList.add('card__like-button_is-active');
        } else {
            cardLikeButton.classList.remove('card__like-button_is-active');
        }
        cardLikeButton.textContent = cardData.likeCount;
    }
}

