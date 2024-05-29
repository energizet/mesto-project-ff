export function GetMe() {
    return fetch(`${process.env.BASE_URL}/users/me`, {
        headers: {
            authorization: process.env.API_TOKEN,
        },
    }).then(d => d.json());
}


export function GetCards() {
    return fetch(`${process.env.BASE_URL}/cards`, {
        headers: {
            authorization: process.env.API_TOKEN
        }
    }).then(d => d.json());
}
