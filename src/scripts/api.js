export function getProfile() {
    return fetch(`${process.env.BASE_URL}/users/me`, {
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => {
        console.log(err);
        return {};
    });
}

export function getCards() {
    return fetch(`${process.env.BASE_URL}/cards`, {
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => {
        console.log(err);
        return [];
    });
}

export function updateProfile(profile) {
    return fetch(`${process.env.BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: process.env.API_TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: profile.name,
            about: profile.about,
        }),
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function updateAvatar(profile) {
    return fetch(`${process.env.BASE_URL}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: process.env.API_TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            avatar: profile.avatar,
        }),
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function addCard(card) {
    return fetch(`${process.env.BASE_URL}/cards`, {
        method: 'POST',
        headers: {
            authorization: process.env.API_TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: card.name,
            link: card.link,
        }),
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function deleteCard(card) {
    return fetch(`${process.env.BASE_URL}/cards/${card._id}`, {
        method: 'DELETE',
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function setLike(card) {
    return fetch(`${process.env.BASE_URL}/cards/likes/${card._id}`, {
        method: 'PUT',
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function deleteLike(card) {
    return fetch(`${process.env.BASE_URL}/cards/likes/${card._id}`, {
        method: 'DELETE',
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}

export function checkImage(url) {
    return fetch(url, {
        method: 'HEAD'
    }).then(res => {
        if (res.ok) {
            return res.headers.get('content-type')?.startsWith('image/');
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}
