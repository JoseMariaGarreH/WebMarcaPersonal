import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Empresas from './paginas/Empresas'
import CentroEducativo from './paginas/CentroEducativo'
import Alumnos from './paginas/Alumnos'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from './componentes/Pie/Pie'

function App() {

  return (
    <div className="container">
      <Cabecera></Cabecera>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/empresas' element={<Empresas></Empresas>}></Route>
        <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>
        <Route path='/alumnos' element={<Alumnos></Alumnos>}></Route>
      </Routes>
      <Pie></Pie>
      
    </div>
  )
}

export default App
