import {configureStore} from "@reduxjs/toolkit"
import consoleSlice from "./consoleSlice"

const store = configureStore({
    reducer: {
        wordsToConsole:
    }
})

export default store