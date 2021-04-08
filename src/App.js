import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const initialState = {
  message: "Hello World!",
  isClicked: true
}

function reducer(state=initialState, action){
  // if(action.type === "sayHello"){
  //   // return `${state.message} is what the store is returning from the dispatch`
  //   let word = state.message
  //   return {
  //     ...state, 
  //     message: word.split('').reverse().join('').toLowerCase()
  //   }
  if(action.type === "clicked"){
    let word = state.message
      return{
        ...state,
        message: word.split('').reverse().join('').toLowerCase(),
        isClicked: !state.isClicked
    }
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  const state = store.getState()
  console.log(state.message, state.isClicked)
})

// --------------------------------------------------------------------------------------------------

function App() {

  function handleClick() {
      store.dispatch({type: "clicked"})
    // store.dispatch({type: "sayHello"}
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
