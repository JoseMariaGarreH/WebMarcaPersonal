function getCounts() {

    const apiURLs = [
        'http://marcapersonalfp.test/api/v1/users/count',
        'http://marcapersonalfp.test/api/v1/proyectos/count',
        'http://marcapersonalfp.test/api/v1/empresas/count'
    ];

    const request = apiURLs.map( apiURL =>
            fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .catch(error => console.log("error", error))
    )

    return Promise.all(request);
}

export default getCounts;