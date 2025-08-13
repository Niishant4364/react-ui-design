import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './footer'
import Dashboard from './dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Dashboard/>
    <Footer/>

    </>
  )
}

export default App
