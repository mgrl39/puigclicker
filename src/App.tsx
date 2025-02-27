/*
import Router from 'react'
import Route from 'react';
import Switch from 'react';
*/
// import Routes from 'react';
//import Switch from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inici from './pages/Inici/Inici'
import Joc from './pages/Joc/Joc'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inici/>} />
          <Route path="/game" element={<Joc/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
