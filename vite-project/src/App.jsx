import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './components/example'
import Index from './pages/Index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index></Index>
    </>
  )
}

export default App
