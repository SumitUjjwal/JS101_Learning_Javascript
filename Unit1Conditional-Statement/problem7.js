//Nested if Conditional Statement
let reg_email = "abc@gmail.com";
let reg_pass = "abc123";

let ent_email = "abc@gmail.com";
let ent_pass = "abc123";

//1 both email and password matches "Login Successful"
//2 email matches but password don't matched "Wrong Password"
//3 email doesn't matched "Wrong Email"
if (ent_email == reg_email) {
  if (ent_pass == reg_pass) {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
}
else {
  console.log("Wrong Email");
}

