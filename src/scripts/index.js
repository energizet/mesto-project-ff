import '../pages/index.css';
import {createCard} from "./components/card";
import {openPopupFabric} from "./components/modal";
import {clearValidation, enableValidation} from "./validation";
import {addCard, deleteCard, deleteLike, getCards, getProfile, setLike, updateProfile} from './api';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');
const placesList = document.querySelector(".places__list");

const popupCardImage = document.querySelector('.popup_type_image');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupProfileAdd = document.querySelector('.popup_type_new-card');

const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image');

const openPopupCard = openPopupFabric(popupCardImage);
const openPopupEdit = openPopupFabric(popupProfileEdit);
const openPopupAdd = openPopupFabric(popupProfileAdd);

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

profileTitle.textContent = profile.name;
profileDescription.textContent = profile.about;
profileImage.style.backgroundImage = `url('${profile.avatar}')`;

placesList.append(...cards.map(item => createCardProxy(item)));

registerEditPopup();
registerAddPopup();

enableValidation(validationConfig);

function createCardProxy(cardData) {
    updateLike();
    cardData.isCanDelete = cardData.owner._id === profile._id;

    const [card, removeCard, like] = createCard(cardTemplate, cardData, {
        removeCard: removeCardProxy,
        like: likeProxy,
        openCard,
    });

    return card;

    async function removeCardProxy() {
        const res = await deleteCard(cardData);

        if (res == null) {
            return;
        }

        removeCard();
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

        Object.assign(cardData, card);

        updateLike();
        like();
    }

    function updateLike() {
        cardData.isLike = cardData.likes.some(user => user._id === profile._id);
        cardData.likeCount = cardData.likes.length;
    }
}

function openCard(cardData) {
    popupCaption.textContent = cardData.name;
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;

    openPopupCard();
}

function registerEditPopup() {
    const profileEdit = document.querySelector('.profile__edit-button');

    const popupProfileTitle = popupProfileEdit.querySelector('.popup__input_type_name');
    const popupProfileDescription = popupProfileEdit.querySelector('.popup__input_type_description');
    const popupProfileButton = popupProfileEdit.querySelector('.popup__button');
    const buttonDefaultText = popupProfileButton.textContent;

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
        popupProfileButton.textContent = 'Сохранение...';

        const updatedProfile = await updateProfile({
            name: popupProfileTitle.value,
            about: popupProfileDescription.value,
        });

        popupProfileButton.textContent = buttonDefaultText;

        if (updatedProfile == null) {
            return;
        }

        Object.assign(profile, updatedProfile);

        profileTitle.textContent = profile.name;
        profileDescription.textContent = profile.about;
    }
}

function registerAddPopup() {
    const profileAdd = document.querySelector('.profile__add-button');
    const form = popupProfileAdd.querySelector('form');

    const cardName = popupProfileAdd.querySelector('.popup__input_type_card-name');
    const cardUrl = popupProfileAdd.querySelector('.popup__input_type_url');
    const cardButton = popupProfileAdd.querySelector('.popup__button');
    const buttonDefaultText = cardButton.textContent;

    const popupForm = popupProfileAdd.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileAdd.addEventListener('click', () => {
        form.reset();
        clearValidation(popupProfileAdd, validationConfig);
        closePopup = openPopupAdd();
    });

    async function submit() {
        cardButton.textContent = 'Сохранение...';

        const card = await addCard({
            name: cardName.value,
            link: cardUrl.value,
        });

        cardButton.textContent = buttonDefaultText;

        if (card == null) {
            return;
        }

        placesList.prepend(createCardProxy(card));
    }
}

async function submitForm(e, submit, closePopup) {
    e.preventDefault();
    await submit();

    if (closePopup instanceof Function) {
        closePopup();
    }
}

