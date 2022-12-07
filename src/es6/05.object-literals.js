// enahced object literals

function newUser(user,age,country){
  return{
    user:user,
    age:age,
    country:country
  }
}

//this is de new form. si se llama igual que el parametro se puede pasar solo una vez

function newUser1(user, age, country) {
  return {
    user,
    age,
    country
  }
}