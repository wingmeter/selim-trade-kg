/* eslint-disable no-alert */

import { AUTH_KEY, BASE_URL, TOKEN_KEY } from '../constants'

// local storage helpers
export const saveToLocalStorage = (key, data) => {
   try {
      localStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      window.alert(error.message)
   }
}
export const getFromLocalStorage = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (error) {
      return window.alert(error.message)
   }
}
export const removeFromLocalStorage = (key) => {
   localStorage.removeItem(key)
}

// auth helper
export const logOut = () => {
   removeFromLocalStorage(AUTH_KEY)
   removeFromLocalStorage(TOKEN_KEY)
   window.location.reload()
}
export const checkRole = (role) => {
   return role === getFromLocalStorage(TOKEN_KEY)?.role
}

// get adim id
export const getAdminId = () => {
   return getFromLocalStorage(AUTH_KEY)?.id
}

// get image url
export const getImgUrl = (url) => {
   if (url) return `${BASE_URL}${url}`
   return null
}

// ger error message
export const getErrorMessage = (error) => {
   return (
      error?.data?.message ||
      error?.data?.error ||
      error?.error ||
      error?.message ||
      'Something Went Wrong'
   )
}
