// &&(and) operator
let a = 10;
let b = 20;
let c = 15;

if  (a<c){
  if (b>c){
    console.log("Hello World!!");
  }
}
else {
  console.log("Something is wrong");
}

//Logical operator
if (a>c && b>c){
  console.log("Hello There!!")
}
else {
  console.log("Something is wrong");
}

//Ternary operator
a<c && b>c ? console.log("Hello World!!") : console.log("Something is wrong")
