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
          <Route path="/" element={<Inici />} />
          <Route path="/joc" element={<Joc />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
