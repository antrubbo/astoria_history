import {configureStore} from "@reduxjs/toolkit"
import consoleSlice from "./consoleSlice"

const store = configureStore({
    reducer: {
      words: consoleSlice,
      count: consoleSlice
    }
})

export default store