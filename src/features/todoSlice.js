import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            return {items: [...state.items, action.payload]}
        },
        remove: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        removeAll: (state) => {
            return { items: [] }
        }
    }
})

export const {add, remove, removeAll} = todoSlice.actions

const todoReducer = todoSlice.reducer

export default todoReducer