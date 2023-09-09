import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav/>
        <Hero />
        <Footer/>
      </div>
    </>
  )
}

export default App
