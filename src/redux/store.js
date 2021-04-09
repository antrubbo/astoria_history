import {configureStore} from "@reduxjs/toolkit"
import exampleReducer from "./exampleSlice"

//Our application might be made up of many different features, and each of those features might have its own reducer function. When we call configureStore, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

const store = configureStore({
    reducer: {
      example: exampleReducer
    }
})

export default store