import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr={name: 'Shaan', age: 20}
  return (
    <>
<h1 className='bg-green-50 text-black p-4 rounded-xl mb-4'>This is Tiwari Shaan</h1>
<Card name="tiwari SHAAN" btntext="Click me"/>
<Card name="Divyanshi Singh" />
    </>
  )
}

export default App
// arr={arr} at line 13 for the props 