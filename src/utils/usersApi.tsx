export const BASE_URL = 'https://jsonplaceholder.typicode.com';
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

function handleResponse(res: Response) {
  if (res.ok) {return res.json()}
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUsers = () => {
  return fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: HEADERS,
  })
    .then(res => handleResponse(res))
}