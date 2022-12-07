// Las promesas retornan algo que va ocurrir hoy mañana o nunca.

const anotherFunction = () =>{
  return new Promise((resolve, reject)=>{
    if(false){
      resolve("Hey paso la función por el resolve");
    }else{
      reject("No funciono chaval");
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err =>{
    console.log(err)
  })