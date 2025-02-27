import { useState } from 'react'
/*
import Router from 'react'
import Route from 'react';
import Switch from 'react';
*/
// import Routes from 'react';
//import Switch from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inici from './components/Inici';
import Joc from './components/Joc'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/inici" element={<Inici />} />
          <Route path="/joc" element={<Joc />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
