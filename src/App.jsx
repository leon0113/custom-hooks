import { useState } from 'react';
import './App.css'
import { useInterval, useIsOnline, useMousePointer } from './hooks'

function App() {
  const isOnline = useIsOnline();
  const mousePosition = useMousePointer();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)
  return (
    <div>
      <h1>Custom Hooks</h1>
      {isOnline ? <div>You are online</div> : <div>You are offline</div>} <br />
      <p>Your mouse position is: {mousePosition.x} & {mousePosition.y}</p>
      <p>useInterval hook: {count}</p>
    </div>
  )
}

export default App