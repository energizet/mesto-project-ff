export function GetProfile() {
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

export function GetCards() {
    return fetch(`${process.env.BASE_URL}/cards`, {
        headers: {
            authorization: process.env.API_TOKEN
        }
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

export function UpdateProfile(profile) {
    return fetch(`${process.env.BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: process.env.API_TOKEN,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: profile.name,
            about: profile.about,
        })
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }).catch(err => console.log(err));
}
