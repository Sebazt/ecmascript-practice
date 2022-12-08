const string = "Sebastian va utilizar la función del replace All en este caso en un string Sebastian";
const stringFormat = string.replace("Sebastian", "sebas")
// con el replace solo reemplaza el primero que encuentre, con el replaceAll lo cambia siempre
const newString = string.replaceAll("Sebastian", "sebas")
console.log(stringFormat);
console.log(newString);