import {createSlice} from "@reduxjs/toolkit"

const consoleSlice = createSlice({
    name: "words",
    initialState: {
        message: "Hello World!"
    },
    reducers:{}
})

export default consoleSlice.reducer 