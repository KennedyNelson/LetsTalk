import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  loadingStatus: true
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setposts: (state, action) => {
      state.value = action.payload
      state.loadingStatus = false
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setposts, setLoading } = postsSlice.actions

export default postsSlice.reducer