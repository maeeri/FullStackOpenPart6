import { createSlice } from '@reduxjs/toolkit'


const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search(state, action) {
      return action.payload
    }
  }
})

export const { search, show } = filterSlice.actions
export default filterSlice.reducer