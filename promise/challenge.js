import fetch from "node-fetch"; //importamos fetch
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

/*
--ejemplo 1 
fetchData(`${API}/products`)
.then(Response => Response.json())
.then(products =>{
    console.log(products);
})
.then(() => {
    console.log('hola');
})
.catch(error => console.log(error));
*/

//ejemplo 2 - llamado multiple

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(err => console.log(err))
.finally(() => console.log('Finaly'));


