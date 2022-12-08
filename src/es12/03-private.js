// declarando la clase

// con el # le digo a js que ese método esprivado, osea que solo se puede utilizar en dicha clase
class User {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("Nuevo usuario")
  }
  //métodos
  #greeting() {
    return `${this.name} hola soy un método`;
  }

  //setters and getters

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
};



// Instanciando
const seba = new User("sebas", 20);
console.log(`${seba.greeting()} y su edad es ${seba.uAge}`);
console.log(seba.uAge = 30);