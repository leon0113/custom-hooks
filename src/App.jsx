import './App.css'
import useIsOnline from './hooks'

function App() {
  const isOnline = useIsOnline();
  console.log(isOnline);
  return (
    <div>
      <h1>Custom Hooks</h1>
      {isOnline ? <div>You are online</div> : <div>You are offline</div>}
    </div>
  )
}

export default App