import { useState } from 'react'
import Login from './Components/Login'

import ShowUser from './Components/showUser'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/>} />
      <Route path='/user' element={ <ShowUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
