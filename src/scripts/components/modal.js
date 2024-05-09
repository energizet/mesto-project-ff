export function openPopup(popup, submit = null) {
    popup.classList.add('popup_is-opened');

    const popupForm = popup.querySelector('.popup__form');

    document.addEventListener('keyup', onPopupClose);
    popupForm?.addEventListener('submit', submitForm);

    const popupContent = popup.querySelector('.popup__content');
    const popupClose = popup.querySelector('.popup__close');

    popupContent.addEventListener('click', e => e.stopPropagation());
    popupClose.addEventListener('click', () => closePopup(popup, onPopupClose, popupForm, submitForm));

    popup.addEventListener('click', () => closePopup(popup, onPopupClose, popupForm, submitForm));

    function onPopupClose(e) {
        if (e.code === 'Escape') {
            closePopup(popup, onPopupClose, popupForm, submitForm);
        }
    }

    function submitForm(e) {
        e.preventDefault();

        if (submit instanceof Function) {
            submit();
        }

        closePopup(popup, onPopupClose, popupForm, submitForm);
    }
}

export function closePopup(popup, onPopupClose, popupForm, submitForm) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', onPopupClose);
    popupForm?.removeEventListener('submit', submitForm);
}
