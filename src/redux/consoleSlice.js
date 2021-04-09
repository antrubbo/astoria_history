import {createSlice} from "@reduxjs/toolkit"

const consoleSlice = createSlice({
    name: "words",
    initialState: {
        message: "Hello World!",
        count: 0
    },
    reducers:{
        consoleLogState: (state, action) => {
            console.log(state.message.split('').reverse().join('').toLowerCase(), state.message)
        },
        increaseCount: (state, action)=> {
            state.count += action.payload
        }
    }
})

// actions
export const {increaseCount, consoleLogState} = consoleSlice.actions

// reducer
export default consoleSlice.reducer 