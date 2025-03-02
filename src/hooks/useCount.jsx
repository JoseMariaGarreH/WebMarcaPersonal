import { useEffect, useState } from "react";

// -- Servicios -------------------------------------------------
import getCounts from "../servicios/getCounts";

const useCount = () => {

    // Definimos un estado para guardar los valores de la propiedad count de los objetos que nos devuelve el servicio
    const [listaCounts,setListaCounts] = useState([]);

    function obtenerCounts(){
        getCounts().then(counts => {
            // Guardamos en un array los valores de la propiedad count de cada objeto que nos devuelve el servicio
            const countValues = counts.map(item => item.count);
            // Actualizamos el estado con el array de valores
            setListaCounts(countValues);
        });
    }

    // Llamamos a la función que obtiene los counts cuando se renderiza el componente
    useEffect(obtenerCounts,[]);

    // Devolvemos los valores que queremos exponer en el hook
    return {listaCounts}
}

export default useCount;