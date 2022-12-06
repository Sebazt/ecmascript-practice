//old form

function newUser(name, age, country) {
  var name = name || "Àlexa";
  var age = age || 24;
  var country = country || "COL";
  console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");


//new feature

function newAdmin(name="Sebas", age=29, country="COL"){
  console.log(name,age,country);
}

newAdmin();
newAdmin("Juan",10,"CAN");