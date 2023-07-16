export function myStringify(obj) {
  let result = ''
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}&`
    }
  }
  return result.slice(0, -1)
}


