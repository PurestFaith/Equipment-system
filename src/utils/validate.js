/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function valiMobile(str) {
  return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str)
}

// 校验密码
export const valiPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str)
}
export const valiRepPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str)
}

export const valiPasswordSix = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(str)
}
export const valiRepPasswordSix = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(str)
}

export const validataNumber = (str) => {
  return /^\d+$/.test(str)
}



