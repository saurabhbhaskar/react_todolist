import {createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:1,
            text: "Hello World"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            // here in state we get initial state or current state and by action we get data passed in it, it is default, action.payload is object
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})



// now we have to export the functionalities
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer


