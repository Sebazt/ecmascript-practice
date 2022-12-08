const fnAsync = () => {
  return new Promise((resolve, reject) => {
    // operador ternario
    (true)
      ? setTimeout(() => {
        return resolve('Funcion asincrona')
      }, 3000)
      : reject(new Error('Error f'));
  })
}

const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something)
  console.log('hello')
}


console.log('Before')
anotherFn()
console.log('After')



