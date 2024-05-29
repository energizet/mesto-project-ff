import '../pages/index.css';
import {like, createCard, removeCard} from "./components/card";
import {openPopupFabric} from "./components/modal";
import {clearValidation, enableValidation} from "./validation";
import {GetCards, GetMe} from './api';

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

const [me, cards] = await Promise.all([
    GetMe(),
    GetCards(),
]);

profileTitle.textContent = me.name;
profileDescription.textContent = me.about;
profileImage.style.backgroundImage = `url('${me.avatar}')`;

placesList.append(...cards.map(item => createCardProxy(item)));

registerEditPopup();
registerAddPopup();

enableValidation(validationConfig);

function createCardProxy(cardData) {
    cardData.isLike = cardData.likes.some(user => user._id === me._id);
    cardData.isCanDelete = cardData.owner._id === me._id;

    return createCard(cardTemplate, cardData, {removeCard, like, openCard});
}

function openCard(cardData) {
    popupCaption.textContent = cardData.name;
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;

    openPopupCard();
}

function registerEditPopup() {
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    const profileEdit = document.querySelector('.profile__edit-button');

    const popupProfileTitle = popupProfileEdit.querySelector('.popup__input_type_name');
    const popupProfileDescription = popupProfileEdit.querySelector('.popup__input_type_description');

    const popupForm = popupProfileEdit.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileEdit.addEventListener('click', () => {
        popupProfileTitle.value = profileTitle.textContent;
        popupProfileDescription.value = profileDescription.textContent;

        clearValidation(popupProfileEdit, validationConfig);
        closePopup = openPopupEdit();
    });

    function submit() {
        profileTitle.textContent = popupProfileTitle.value;
        profileDescription.textContent = popupProfileDescription.value;
    }
}

function registerAddPopup() {
    const profileAdd = document.querySelector('.profile__add-button');
    const form = popupProfileAdd.querySelector('form');

    const cardName = popupProfileAdd.querySelector('.popup__input_type_card-name');
    const cardUrl = popupProfileAdd.querySelector('.popup__input_type_url');

    const popupForm = popupProfileAdd.querySelector('.popup__form');

    let closePopup;
    popupForm.addEventListener('submit', e => submitForm(e, submit, closePopup));

    profileAdd.addEventListener('click', () => {
        form.reset();
        clearValidation(popupProfileAdd, validationConfig);
        closePopup = openPopupAdd();
    });

    function submit() {
        placesList.prepend(createCardProxy({
            name: cardName.value,
            link: cardUrl.value,
        }));
    }
}

function submitForm(e, submit, closePopup) {
    e.preventDefault();
    submit();

    if (closePopup instanceof Function) {
        closePopup();
    }
}

