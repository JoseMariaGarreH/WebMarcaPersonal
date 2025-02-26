import { useEffect } from "react";

const useAlumnos = () =>{

    const [listaAlumnos, setListaAlumnos] = useState([]);

    function loadAlumnos(){
        getAlumnos().then(alumnos => {
            setListaAlumnos(alumnos);
        });
    }

    useEffect(loadAlumnos, []);

    return { listaAlumnos }
}

export default useAlumnos;