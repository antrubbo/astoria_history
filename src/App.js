import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increaseCount, changeMessage, flipClicked} from './redux/exampleSlice'
// import {useState} from 'react'

function App() {
  // A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result. useSelector() can return values from the Redux store state, and also return derived values based on that state as well. 

  // useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data.

  const stateMessage = useSelector(state => state.example.message)
  const stateCount = useSelector(state => state.example.count)
  const clicked = useSelector(state => state.example.isClicked)

  console.log(stateCount)
  
  // type this in to change state and have access to dispatch
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(changeMessage(stateMessage.split('').reverse().join('').toLowerCase()))
    dispatch(flipClicked(!clicked))
  }
  
  function handleCount() {
    const action = increaseCount(20)
    dispatch(action)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and {clicked ? stateMessage : 'click this!'}
        </p>
        <p onClick={handleCount}>
          Here is the count: {stateCount}
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
