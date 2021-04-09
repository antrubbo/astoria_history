import {configureStore} from "@reduxjs/toolkit"
import consoleReducer from "./consoleSlice"

const store = configureStore({
    reducer: {
      words: consoleReducer,
      count: consoleReducer
    }
})

export default store