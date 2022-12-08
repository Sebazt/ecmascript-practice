function* iterateArray(array){
  for (let value of array){
    yield value;
  }
}

const array = ["Seba", 10, "Londo", "Goku"]
const it = iterateArray(array);

for (let i = 0; i < array.length; i++) {
  console.log(it.next().value);
}