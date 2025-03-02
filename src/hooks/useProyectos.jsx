import { useState,useEffect } from "react";

// -- Servicios -------------------------------------------------
import getProyectos from "../servicios/getProyectos";

const useProyectos = () => {

    // Guardamos en un estado si estamos buscando proyectos
    const [buscando,setBuscando] = useState(true);
    // Guardamos en un estado la lista de proyectos
    const [listaProyectos, setListaProyectos] = useState([]);

    function obtenerProyectos(){

        // Marcamos que estamos buscando los datos
        setBuscando(true);

        // Llamamos al servicio que nos devuelve los proyectos
        getProyectos().then(proyecto => {
            // Guardamos en el estado la lista de proyectos
            setListaProyectos(proyecto);
            // Marcamos que hemos finalizado la búsqueda
            setBuscando(false);
        });               
    }

    // Llamamos a la función que obtiene los proyectos cuando se renderiza el componente
    useEffect(obtenerProyectos, []);

    // Devolvemos los valores que queremos exponer en el hook
    return {  buscando,listaProyectos }

}

export default useProyectos;