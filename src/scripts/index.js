import '../pages/index.css';
import {createCard} from "./components/card";
import {openPopupFabric} from "./components/modal";
import {clearValidation, enableValidation} from "./validation";
import {
    addCard,
    deleteCard,
    deleteLike,
    getCards,
    getProfile,
    setLike,
    updateAvatar,
    updateProfile
} from './api';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');
const placesList = document.querySelector(".places__list");

const popupCardImage = document.querySelector('.popup_type_image');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupProfileAdd = document.querySelector('.popup_type_new-card');
const popupAvatar = document.querySelector('.popup_type_avatar');
const popupDeleteCard = document.querySelector('.popup_type_delete-card');

const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image');

const openPopupCard = openPopupFabric(popupCardImage);
const openPopupEdit = openPopupFabric(popupProfileEdit);
const openPopupAdd = openPopupFabric(popupProfileAdd);
const openPopupAvatar = openPopupFabric(popupAvatar);
const openPopupDeleteCard = registerDeleteCardPopup();

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const [profile, cards] = await Promise.all([
    getProfile(),
    getCards(),
]);

setProfile();

placesList.append(...cards.map(item => createCardProxy(item)));

registerAvatarPopup();
registerEditPopup();
registerAddPopup();

enableValidation(validationConfig);

function registerDeleteCardPopup() {
    const openPopupDeleteCard = openPopupFabric(popupDeleteCard);
    const popupButton = popupDeleteCard.querySelector('.popup__button');
    const buttonDefaultText = popupButton.textContent;

    const popupForm = popupDeleteCard.querySelector('.popup__form');

    let closePopup;
    let cardData;
    let removeCard;

    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    return (card, remove) => {
        closePopup = openPopupDeleteCard();
        cardData = card;
        removeCard = remove;
    };

    async function submit() {
        popupButton.textContent = 'Сохранение...';

        const res = await deleteCard(cardData);

        popupButton.textContent = buttonDefaultText;

        if (res == null) {
            return;
        }

        removeCard();
    }
}

function createCardProxy(cardData) {
    cardData.isLike = cardData.likes.some(user => user._id === profile._id);
    cardData.likeCount = cardData.likes.length;
    cardData.isCanDelete = cardData.owner._id === profile._id;

    const [card, removeCard, like] = createCard(cardTemplate, cardData, {
        removeCard: removeCardProxy,
        like: likeProxy,
        openCard,
    });

    return card;

    function removeCardProxy() {
        openPopupDeleteCard(cardData, removeCard);
    }

    async function likeProxy() {
        let card;
        if (cardData.isLike) {
            card = await deleteLike(cardData);
        } else {
            card = await setLike(cardData);
        }

        if (card == null) {
            return;
        }

        card.isLike = card.likes.some(user => user._id === profile._id);
        card.likeCount = card.likes.length;
        Object.assign(cardData, card);

        like();
    }
}

function openCard(cardData) {
    popupCaption.textContent = cardData.name;
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;

    openPopupCard();
}

function registerAvatarPopup() {
    const popupAvatarLink = popupAvatar.querySelector('.popup__input_type_url');
    const popupButton = popupAvatar.querySelector('.popup__button');
    const buttonDefaultText = popupButton.textContent;

    const popupForm = popupAvatar.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileImage.addEventListener('click', () => {
        popupForm.reset();

        clearValidation(popupAvatar, validationConfig);
        closePopup = openPopupAvatar();
    });

    async function submit() {
        popupButton.textContent = 'Сохранение...';

        const link = popupAvatarLink.value;

        const updatedProfile = await updateAvatar({
            avatar: link,
        });

        popupButton.textContent = buttonDefaultText;

        if (updatedProfile == null) {
            return;
        }

        Object.assign(profile, updatedProfile);

        setProfile();
    }
}

function registerEditPopup() {
    const profileEdit = document.querySelector('.profile__edit-button');

    const popupProfileTitle = popupProfileEdit.querySelector('.popup__input_type_name');
    const popupProfileDescription = popupProfileEdit.querySelector('.popup__input_type_description');
    const popupButton = popupProfileEdit.querySelector('.popup__button');
    const buttonDefaultText = popupButton.textContent;

    const popupForm = popupProfileEdit.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileEdit.addEventListener('click', () => {
        popupProfileTitle.value = profile.name;
        popupProfileDescription.value = profile.about;

        clearValidation(popupProfileEdit, validationConfig);
        closePopup = openPopupEdit();
    });

    async function submit() {
        popupButton.textContent = 'Сохранение...';

        const updatedProfile = await updateProfile({
            name: popupProfileTitle.value,
            about: popupProfileDescription.value,
        });

        popupButton.textContent = buttonDefaultText;

        if (updatedProfile == null) {
            return;
        }

        Object.assign(profile, updatedProfile);

        setProfile();
    }
}

function registerAddPopup() {
    const profileAdd = document.querySelector('.profile__add-button');

    const cardName = popupProfileAdd.querySelector('.popup__input_type_card-name');
    const cardUrl = popupProfileAdd.querySelector('.popup__input_type_url');
    const popupButton = popupProfileAdd.querySelector('.popup__button');
    const buttonDefaultText = popupButton.textContent;

    const popupForm = popupProfileAdd.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileAdd.addEventListener('click', () => {
        popupForm.reset();
        clearValidation(popupProfileAdd, validationConfig);
        closePopup = openPopupAdd();
    });

    async function submit() {
        popupButton.textContent = 'Сохранение...';

        const link = cardUrl.value;

        const card = await addCard({
            name: cardName.value,
            link: link,
        });

        popupButton.textContent = buttonDefaultText;

        if (card == null) {
            return;
        }

        placesList.prepend(createCardProxy(card));
    }
}

function setProfile() {
    profileTitle.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileImage.style.backgroundImage = `url('${profile.avatar}')`;
}

async function submitForm(e, submit, closePopup) {
    e.preventDefault();
    const isClose = (await submit()) ?? true;

    if (isClose === false) {
        return;
    }

    if (closePopup instanceof Function) {
        closePopup();
    }
}

