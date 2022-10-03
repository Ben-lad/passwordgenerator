function generator(){
  var gen = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=-_:?`
  var length = 16;
  var password ="";
  for (let index = 0; i < length; i++) {
        var randomNumber = Math.floor( Math.random() * gen.length)
         password += gen.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("demo").value = password;
}


