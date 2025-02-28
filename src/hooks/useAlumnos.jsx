import { useEffect } from "react";
import { useState } from "react";
import getAlumnos from "../servicios/getAlumnos";

const useAlumnos = () =>{

    const [listaAlumnos, setListaAlumnos] = useState([]);
    const [buscando,setBuscando] = useState(true);

    function loadAlumnos(){

        setBuscando(true);

        getAlumnos().then(alumnos => {
            setListaAlumnos(alumnos);
            setBuscando(false);
        });
    }

    useEffect(loadAlumnos, []);

    return { buscando,listaAlumnos }
}

export default useAlumnos;