
//////////////////////ejemplo 1
///funcion
function sum (num1, num2){
    return num1 + num2;
};

//llamaremos a la funcion
function calc(num1, num2, callback){
    return callback(num1, num2);
};

//prueba valor - valor - funcion
console.log('suma: ' ,calc(2,2,sum));

///////////////////////ejemplo 2 

// setTimeout(() => {
// }, timeout);
//saludo 1
setTimeout(function(){
    console.log('hello');
}, 2000)//2000 dos segundo


//saludo 2
//` => comillas francesar Alt + 96
function grettin(name){
    console.log(`hola ${name}`);
}

setInterval(grettin, 2000, 'Ana');


//reto
// Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.
// Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

// window.setTimeout(() => {
//   // code
// })

// Dentro del cuerpo de la función execCallback debes escribir tu solución.

// Ejemplo:

// Input:
// const myFunc = () => console.log('Log after 2s')
// execCallback(myFunc);

// Output:
// // Execute myFunc 2s after

//solucion:

// export function execCallback(callback) {
//     // Tu código aquí 👈
//     window.setTimeout(callback,2000)
//   }
  