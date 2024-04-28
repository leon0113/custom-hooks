import { useEffect, useState } from 'react';
import './App.css'
import { useDebounce, useInterval, useIsOnline, useMousePointer } from './hooks'
import axios from 'axios';

function App() {
  const isOnline = useIsOnline();
  //-----------------
  const mousePosition = useMousePointer();
  // --------useInterval
  const [count, setCount] = useState(0);
  //------------useDebounce
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 2000); // 500 milliseconds debounce delay
  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  useEffect(() => {
    console.log(debouncedValue)
    console.log("debounce");
  }, [debouncedValue]);
  //__________________useInterval hook__________________________________
  useInterval(() => {
    setCount(c => c + 1)
  }, 1000);


  return (
    <div>
      <h1>Custom Hooks</h1>
      {isOnline ? <div>You are online</div> : <div>You are offline</div>} <br />
      <p>Your mouse position is: {mousePosition.x} & {mousePosition.y}</p>
      <p>useInterval hook: {count}</p>
      useDebounce hook :
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default App