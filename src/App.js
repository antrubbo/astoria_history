import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increaseCount, consoleLogState} from './redux/consoleSlice'
// import {useState} from 'react'

function App() {
  // when you want to access pieces of state(get data out of the store), use useSelector()
  const consoleState = useSelector(state => state.words.message)
  const countState = useSelector(state => state.words.count)
  console.log(countState)
  

  // type this in to change state and have access to dispatch
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(consoleLogState())
  }
  
  function handleCount(val) {
    const action = increaseCount(20)
    dispatch(action)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={(e) => handleClick(20)}>
          Edit <code>src/App.js</code> and {consoleState}
        </p>
        <p onClick={handleCount}>
          Here is the count: {countState}
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
