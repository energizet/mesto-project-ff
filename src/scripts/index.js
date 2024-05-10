import '../pages/index.css';
import {initialCards} from './cards';
import {like, createCard, removeCard} from "./components/card";
import {openPopupFabric} from "./components/modal";

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

placesList.append(...initialCards.map(item => createCardProxy(item)));

registerEditPopup();
registerAddPopup();

function createCardProxy(cardData) {
    const card = createCard(cardTemplate, cardData, {removeCard, like});

    const cardImage = card.querySelector('.card__image');

    cardImage.addEventListener('click', () => {
        popupCaption.textContent = cardData.name;
        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;

        openPopupCard();
    });

    return card;
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

