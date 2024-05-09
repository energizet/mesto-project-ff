import '../pages/index.css';
import {initialCards} from './cards';
import {onLike, createCard, removeCard} from "./components/card";
import {openPopup} from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');
const placesList = document.querySelector(".places__list");
const popupCardImages = document.querySelector('.popup_type_image');

placesList.append(...initialCards.map(item =>
    createCard(cardTemplate, item, removeCard, onLike, popupCardImages)));

toOpenPopupEdit();
toOpenPopupAdd();

function toOpenPopupEdit() {
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    const profileEdit = document.querySelector('.profile__edit-button');
    const popupProfileEdit = document.querySelector('.popup_type_edit');

    const popupProfileTitle = popupProfileEdit.querySelector('.popup__input_type_name');
    const popupProfileDescription = popupProfileEdit.querySelector('.popup__input_type_description');

    profileEdit.addEventListener('click', () => {
        popupProfileTitle.value = profileTitle.textContent;
        popupProfileDescription.value = profileDescription.textContent;

        openPopup(popupProfileEdit, () => {
            profileTitle.textContent = popupProfileTitle.value;
            profileDescription.textContent = popupProfileDescription.value;
        });
    });
}

function toOpenPopupAdd() {
    const profileAdd = document.querySelector('.profile__add-button');
    const popupProfileAdd = document.querySelector('.popup_type_new-card');

    const cardName = popupProfileAdd.querySelector('.popup__input_type_card-name');
    const cardUrl = popupProfileAdd.querySelector('.popup__input_type_url');

    profileAdd.addEventListener('click', () => {
        cardName.value = '';
        cardUrl.value = '';

        openPopup(popupProfileAdd, () => {
            placesList.prepend(createCard(cardTemplate, {
                name: cardName.value,
                link: cardUrl.value,
            }, removeCard, onLike, popupCardImages));
        });
    });
}

