import { useState,useEffect } from "react";
import getProyectos from "../servicios/getProyectos";

const useProyectos = () => {

    const [buscando,setBuscando] = useState(true);
    const [listaProyectos, setListaProyectos] = useState([]);

    function obtenerProyectos(){

        setBuscando(false);

        getProyectos().then(proyecto => {
            setListaProyectos(proyecto);
            setBuscando(true);
        });               
    }

    useEffect(obtenerProyectos, []);

    return {  buscando,listaProyectos }

}

export default useProyectos;