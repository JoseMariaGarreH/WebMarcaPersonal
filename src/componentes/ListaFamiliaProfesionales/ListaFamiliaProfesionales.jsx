import "./ListaFamiliaProfesionales.css";
import { useContext } from "react";

// -- Componentes -------------------------------------------------
import FiltroFamiliaProfesionales from "../FiltroFamiliaProfesional/FiltroFamiliaProfesional";
// -- Contextos -------------------------------------------------
import IdiomaContext from "../../contextos/IdiomaContext";


const ListaFamiliaProfesionales = (props) => {

    const { idioma } = useContext(IdiomaContext);
    
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">{idioma.proyectos.op1}</h5>
                        <div className="card-body">
                            {/* Llevamos toda la lógica del filtrado hacia otro componente y le pasamos los valores que necesita */}
                            <FiltroFamiliaProfesionales idioma={idioma}
                                                        listaFamilias={props.listaFamilias} 
                                                        setListaFamilias={props.setListaFamilias}>
                            </FiltroFamiliaProfesionales>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaFamiliaProfesionales;