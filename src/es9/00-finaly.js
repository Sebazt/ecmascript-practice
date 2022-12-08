const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey paso la función por el resolve");
    } else {
      reject("No funciono chaval");
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err => {
    console.log(err)
  })
  .finally(()=>{
    console.log("Ya termino todo con el finally")
  })