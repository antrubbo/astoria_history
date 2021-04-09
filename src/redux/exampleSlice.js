import {createSlice} from "@reduxjs/toolkit"

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

// Redux Toolkit has a function called createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, write an object that has some reducer functions in it, and it generates the corresponding action code automatically. The string from the name option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the "counter" name + the "increment" reducer function generated an action type of {type: "counter/increment"}. (After all, why write this by hand if the computer can do it for us!)

const exampleSlice = createSlice({
    name: "example",
    initialState: {
        message: "Hello World!",
        count: 0,
        isClicked: false
    },
    reducers:{
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //so, these slice action reducers are changing state based on whatever payload is passed in from the action
        changeMessage: (state, action) => {
            state.message = action.payload
        },
        increaseCount: (state, action)=> {
            state.count += action.payload
        },
        flipClicked: (state, action) => {
            state.isClicked = action.payload
        }
    }
})

// actions
export const {increaseCount, changeMessage, flipClicked} = exampleSlice.actions

// reducer
export default exampleSlice.reducer 