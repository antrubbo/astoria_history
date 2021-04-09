import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux'
// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//   message: "Hello World!",
//   isClicked: true
// }

// function reducer(state=initialState, action){
//   if(action.type === "clicked"){
//     let word = state.message
//       return{
//         ...state,
//         message: word.split('').reverse().join('').toLowerCase(),
//         isClicked: !state.isClicked
//     }
//   }
// }

// console.log(initialState.message)

// const slice = createSlice({
//   name: "firstSlice",
//   initialState: initialState,
//   reducers: {
//     consoleLogState(state, action) {
//         console.log(state.message.split('').reverse().join('').toLowerCase(), initialState.message, !state.isClicked)
//     }
//   }
// })

// const reducer = slice.reducer

// const actions = slice.actions
// const {consoleLogState} = slice.actions
// console.log(consoleLogState())

// single source of truth: where state lives
// from 'redux'
// const store = createStore(reducer)

// re-render when state changes: subscribe 
// subscribe() not really used with React
// store.subscribe(() => {
//   const state = store.getState()
//   console.log(state.message, state.isClicked)
// })

// --------------------------------------------------------------------------------------------------

function App() {

  // update state: dispatch
  function handleClick() {
      store.dispatch(consoleLogState())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and {initialState.isClicked ? "don't do shit" : 'save to reload'}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
