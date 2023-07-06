const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)//este es un if
          ? setTimeout(() => resolve('Async!!'), 2000) //si es correcto
          : reject(new Error('Error"')); //seria el else
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('hello');
}

console.log('Before');
anotherFn();
console.log('After');
