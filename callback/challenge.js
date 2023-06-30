
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    // 0 → Se ha inicializado.
    // 1 → Loading (cargando).
    // 2 → Se ha cargado.
    // 3 → Procesamiento si existe alguna descarga.
    // 4 → Completado.

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){ //solicitud correcta
                callback(null, JSON.parse(xhttp.resposeText))
            }
        }else{
            const error = new error('Error ' +urlApi);
            return callback(error, null);
        }
    }
    xhttp.send(); // para poder ejecutar
}
