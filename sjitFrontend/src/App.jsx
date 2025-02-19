// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./components/functional component/Home"
import About from "./components/functional component/About"
import Contact from "./components/functional component/Contact"
import Gallery from "./components/functional component/Gallery"
import Signup from "./components/functional component/signup"
import Navbar from "./components/functional component/Navbar"
import {BrowserRouter,Routes,Route} from  'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element = {<Home props="hello"/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/Gallery' element = {<Gallery/>}></Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
