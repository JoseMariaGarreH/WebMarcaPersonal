import { useState,useEffect } from "react";
import getProyectos from "../servicios/getProyectos";

const useProyectos = () => {

    const [buscando,setBuscando] = useState(true);
    const [listaProyectos, setListaProyectos] = useState([]);

    function obtenerProyectos(){

        setBuscando(true);

        getProyectos().then(proyecto => {
            setListaProyectos(proyecto);
            setBuscando(false);
        });               
    }

    useEffect(obtenerProyectos, []);

    return {  buscando,listaProyectos }

}

export default useProyectos;