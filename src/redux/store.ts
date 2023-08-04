import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notes/notesSlice.ts'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
})

export default store;
