import './App.css'
import Contenido from './componentes/Contenido'
import { Routes,Route } from 'react-router-dom'
import Empresas from './paginas/Empresas'
import CentroEducativo from './paginas/CentroEducativo'
import Alumnos from './paginas/Alumnos'

function App() {

  return (
    <div>
      <Contenido></Contenido>
      <Routes>
        <Route path='/empresas' element={<Empresas></Empresas>}></Route>
        <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>
        <Route path='/alumnos' element={<Alumnos></Alumnos>}></Route>
      </Routes>
    </div>
  )
}

export default App
