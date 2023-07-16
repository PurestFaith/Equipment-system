// import Cookies from 'js-cookie'

// const TokenKey = 'token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

const TokenKey = 'token'

export const getToken = () => {
  return localStorage.getItem(TokenKey)
}

export const setToken = (token) => {
  localStorage.setItem(TokenKey, token)
}

export const removeToken = () => {
  localStorage.removeItem(TokenKey)
}
