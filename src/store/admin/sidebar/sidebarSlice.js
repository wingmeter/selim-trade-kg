import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   sidebarShow: true,
   unfoldable: false,
}

const sidebarSlice = createSlice({
   name: 'sidebar',
   initialState,
   reducers: {
      toggleSidebar: (state, action) => {
         state.sidebarShow = action.payload
      },
      setUnfoldble: (state, action) => {
         state.unfoldable = action.payload
      },
   },
})

export const { toggleSidebar, setUnfoldble } = sidebarSlice.actions
export default sidebarSlice
