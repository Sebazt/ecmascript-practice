// destructuring with arrays

const colours = ["blue", "green"];
let [a, b] = colours;
console.log(a, colours[1]);
console.log(typeof (a));


// destructuring with objects

const user = { username: "Sebas", age: 10 };
let { username, age } = user;
console.log(username, age);
console.log(typeof (username));


//spread operator  me ayuda a iterar todos los elementos de una constante, una copia
// permite concatenar y destructurar arrays y objectos
//me ayuda a copiar un array sin modificar su valor original
const numeros = [1,2,3];
let numerosCopiados = [...numeros];

numerosCopiados[0] = 0;
console.log(numeros);
console.log(numerosCopiados);

//me ayuda a concatenar
const nums = [1,3,5];
const pares = [2,4,6];
const nuevoArray = [10,...nums,"separación",...pares]
console.log(nuevoArray);

// con objetos

const user1={
  username: "seba",
  age:10
}

const data2={
  mon:"Silvia",
  anime:"Cyberpunk"
}


let copyOfUser = {...user1}
copyOfUser.game = "LOL";
console.log(user1);
console.log(copyOfUser);

const total = {...user1,...data2};
console.log(total);