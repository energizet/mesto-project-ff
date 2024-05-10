export function openPopupFabric(popup) {
    closePopupByCross(popup, () => closePopup());
    popup.addEventListener('mousedown', closePopupByOverlay);

    return () => {
        popup.classList.add('popup_is-opened');

        document.addEventListener('keyup', closePopupByEsc);

        return closePopup;
    };

    function closePopupByOverlay(e) {
        if (e.currentTarget === e.target) {
            closePopup();
        }
    }

    function closePopupByEsc(e) {
        if (e.code === 'Escape') {
            closePopup();
        }
    }

    function closePopupByCross() {
        const popupClose = popup.querySelector('.popup__close');
        popupClose.addEventListener('click', closePopup);
    }

    function closePopup() {
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', closePopupByEsc);
    }
}
