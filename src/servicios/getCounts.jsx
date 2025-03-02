function getCounts() {

    // Define una constante apiUrl con la URL de los endpoints de la API que queremos consultar
    const apiURLs = [
        'http://marcapersonalfp.test/api/v1/users/count',
        'http://marcapersonalfp.test/api/v1/proyectos/count',
        'http://marcapersonalfp.test/api/v1/empresas/count'
    ];

    // Recorremos el array de los endpoints y hacemos una petición a cada uno de ellos
    // Usamos fetch para recuperar los post de la REST API. Puesto que hacemo una petición al servidor
    const request = apiURLs.map( apiURL =>
            fetch(apiURL, {
            // Especifica el método HTTP como GET
            method: 'GET',
            // Establece los encabezados de la solicitud
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()) // Maneja la respuesta convirtiéndola a JSON
        .catch(error => console.log("error", error)) // Captura cualquier error que ocurra durante la operación fetch y lo registra en la consola
    )

    return Promise.all(request); // Esta promesa se resuelve cuando todas las promesas en el iterable se han resuelto o se rechaza si alguna de las promesas se rechaza.
}

export default getCounts;