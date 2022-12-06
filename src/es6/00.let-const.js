let fruit = "Apple";
fruit = "Orange";
console.log(fruit);

const myName = "Sebastian";


const fruits = () =>{
  if(true){
    // definido con let y const permanecen en su scope, no tiene hoisting global
    var fruit1 = "Kiwi";    // global scope
    let fruit2 = "Banana";   // local scope
    const fruit3 = "Handle";  // local scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();