import { useEffect } from "react";
import { useState } from "react";

// -- Servicios -------------------------------------------------
import getAlumnos from "../servicios/getAlumnos";

const useAlumnos = () =>{

    const [listaAlumnos, setListaAlumnos] = useState([]);
    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando,setBuscando] = useState(true);

    function obtenerAlumnos(){
        // Marcamos que estamos buscando los datos
        setBuscando(true);

        // Llamamos al servicio que nos devuelve los alumnos
        getAlumnos().then(alumnos => {
            setListaAlumnos(alumnos);
            // Marcamos que hemos finalizado la búsqueda
            setBuscando(false);
        });
    }

    // Llamamos a la función que obtiene los alumnos cuando se renderiza el componente
    useEffect(obtenerAlumnos, []);

    // Devolvemos los valores que queremos exponer en el hook
    return { buscando,listaAlumnos }
}

export default useAlumnos;