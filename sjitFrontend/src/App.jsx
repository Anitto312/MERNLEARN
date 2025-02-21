// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./components/functional component/Home"
import About from "./components/functional component/About"
import Contact from "./components/functional component/Contact"
import Gallery from "./components/functional component/Gallery"
import Signup from "./components/functional component/Signup.jsx"
import Navbar from "./components/functional component/Navbar"
import UseEffect from "./components/hooks/UseEffect.jsx"
import UseState from "./components/hooks/usestate.jsx"
import UseEffectAPI from "./components/hooks/UseEffectAPI.jsx"
import UseRef from "./components/hooks/UseRef.jsx"
import UseMemo from "./components/hooks/UseMemo.jsx"
import UseCallback from "./components/hooks/UseCallback.jsx"
import UseMemoise from "./components/hooks/UseMemoize.jsx"
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import HoC from "./components/functional component/HoC/HoC.jsx"
function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path='/' element = {<Home props="hello"/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/use-State' element = {<UseState/>}></Route>
          <Route path='/use-Effect' element = {<UseEffect/>}></Route>
          <Route path='/use-Effect-API' element = {<UseEffectAPI/>}></Route>
          <Route path='/use-Ref' element = {<UseRef />}></Route>
          <Route path='/use-Memo' element = {<UseMemo />}></Route>
          <Route path='/use-Callback' element = {<UseCallback />}></Route>
          <Route path='/use-Memoise' element = {<UseMemoise />}></Route>
          <Route path="/HoC" element={<HoC/>}></Route>
          <Route path='/Gallery' element = {<Gallery/>}></Route>
          <Route path='/Signup' element = {<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
