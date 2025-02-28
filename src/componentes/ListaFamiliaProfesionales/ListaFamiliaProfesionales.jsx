import "./ListaFamiliaProfesionales.css";
import { useContext } from "react";
import IdiomaContext from "../../contextos/IdiomaContext";
import FiltroFamiliaProfesionales from "../FiltroFamiliaProfesional";

const ListaFamiliaProfesionales = (props) => {

    const { idioma } = useContext(IdiomaContext);
    
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">{idioma.proyectos.op1}</h5>
                        <div className="card-body">
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