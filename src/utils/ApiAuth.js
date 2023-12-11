export const baseUrl = 'https://auth.nomoreparties.co'

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

// регистрация пользователя
export function register(email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })
  .then(checkResponse);
}

// авторизация пользователя
export function authorize(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })
  .then(checkResponse);
}

// проверка валидности токена и получение email в шапку профиля
export function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse);
}
