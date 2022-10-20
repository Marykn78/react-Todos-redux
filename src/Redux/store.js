import { configureStore } from '@reduxjs/toolkit'
import  Todoslice  from './reducer/TodoSlice'

export const store = configureStore({
  reducer: {
    todos: Todoslice
  },
})