import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      title: "add title",
      description: "add description",
      state: false,
    },
    {
      id: 2,
      title: "add title",
      description: "add description",
      state: false,
    },
  ]
export const Todoslice =createSlice(
    {
        name:'todos',
        initialState,
        reducer:{
            addTodo:(state,action)=>{
                state.push(action.payload)
            },
            updateTodo:(state,action)=>{
                const index = state.findIndex(item=>(item.id === action.payload.id))
                state[index]=action.payload
            },
            deleteTodo:(state,action)=>{
                const index = state.findIndex(item=>(item.id === action.payload.id))
                state.splice(index,1)
                // console.log('hi')
            }
        }
    }
)
export const {addTodo,updateTodo,deleteTodo}=Todoslice.actions

export default Todoslice.reducer