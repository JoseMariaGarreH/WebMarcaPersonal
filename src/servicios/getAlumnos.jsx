function getAlumnos() {
    
    const apiUrl = 'http://marcapersonalfp.test/api/v1/users';

    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch(error => console.log("error", error));
}

export default getAlumnos;