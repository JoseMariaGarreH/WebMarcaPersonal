import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Empresa from './paginas/Empresas'
import CentroEducativo from './paginas/CentroEducativo'
import Alumnos from './paginas/Alumnos'
import Cabecera from './componentes/Cabecera/Cabecera'
import IdiomaContext from './contextos/IdiomaContext'
import { useState } from 'react'
import idiomas from './mocks/mock-idiomas'

function App() {

  const [idiomaElegido, setIdiomaElegido] = useState("es");

  function cambiarIdioma(nuevoIdioma) {
    setIdiomaElegido(nuevoIdioma);
  }

  return (
    <>
      <IdiomaContext.Provider value={{ idioma: idiomas[idiomaElegido], cambiarIdioma }}>
      <div className='container'>
          <Cabecera></Cabecera>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/empresa/*' element={<Empresa></Empresa>}></Route>
              <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>
              <Route path='/alumnos' element={<Alumnos></Alumnos>}></Route>
              
            </Routes>
          </div>
      </IdiomaContext.Provider>
    </>
  )
}

export default App
