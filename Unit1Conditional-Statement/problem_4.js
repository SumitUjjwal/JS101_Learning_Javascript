//Given stored username and password and input username and password, Print if the user can login or not.

let reg_un = "xyz@gmail.com";
let reg_pw = "123456";

let ent_un = "xyz@gmail.com";
let ent_pw = "12356";

if (reg_un == ent_un){
  if (reg_pw == ent_pw){
  console.log("Login Succefull");
  }
  else {
    console.log("Incorrect Password");
  }
}
else {
  console.log("Incorrect Credentials");
}