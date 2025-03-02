import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// -- Componentes -------------------------------------------------
import Cabecera from './componentes/Cabecera/Cabecera'

// -- Contextos -------------------------------------------------
import IdiomaContext from './contextos/IdiomaContext'

// -- Mooks -------------------------------------------------
import idiomas from './mocks/mock-idiomas'

// -- Páginas -------------------------------------------------
import Home from './paginas/Home/Home'
import Empresa from './paginas/Empresas'
import CentroEducativo from './paginas/CentroEducativo'
import Alumnos from './paginas/Alumnos'
import BusquedaProyectos from "./paginas/BusquedaProyectos";
import BusquedaAlumnos from "./paginas/BusquedaAlumnos";


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
              <Route path='/empresa' element={<Empresa></Empresa>}></Route>
              <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>
              <Route path='/alumnos' element={<Alumnos></Alumnos>}></Route>
              <Route path='/empresa/proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
              <Route path='/empresa/alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>
            </Routes>
          </div>
      </IdiomaContext.Provider>
    </>
  )
}

export default App
