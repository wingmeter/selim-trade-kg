/* eslint-disable no-alert */

import { AUTH_KEY, TOKEN_KEY } from '../constants'

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
