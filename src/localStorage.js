export function getTokenFromLocalStorage() {
  return localStorage.getItem('jwt_toke');
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('jwt_toke', token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('jwt_toke');
}
