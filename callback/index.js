
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



