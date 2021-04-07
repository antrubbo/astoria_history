import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const initialState = {
  message: "Hello World!"
}

function reducer(state=initialState, action){
  if(action.type === "sayHello"){
    // return `${state.message} is what the store is returning from the dispatch`
    return state.message.split('').reverse().join('').toLowerCase()
  }
}

const store = createStore(reducer)

// --------------------------------------------------------------------------------------------------

function App() {

  function handleClick() {
    store.dispatch({type: "sayHello"})
    console.log(store.getState())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and save to reload.
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
