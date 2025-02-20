import { useState,useEffect } from "react";
import getProyectos from "../servicios/getProyectos";

const useProyectos = () => {

    const [listaProyectos, setListaProyectos] = useState([]);

    function obtenerProyectos(){
        getProyectos().then(proyecto => {
            setListaProyectos(proyecto);
        });               
    }

    useEffect(obtenerProyectos, []);

    return { listaProyectos }

}

export default useProyectos;