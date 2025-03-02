function getAlumnos() {
    
    // Define una constante apiUrl con la URL de los endpoints de la API que queremos consultar
    const apiUrl = 'http://marcapersonalfp.test/api/v1/users';

    //Usamos fetch para recuperar los post de la REST API. Puesto que hacemo una petición al servidor
    return fetch(apiUrl).then(response => response.json()) // Maneja la respuesta convirtiéndola a JSON
    .catch(error => console.log("error", error)); // Captura cualquier error que ocurra durante la operación fetch y lo registra en la consola
}

export default getAlumnos;