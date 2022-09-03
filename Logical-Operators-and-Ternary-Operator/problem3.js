//Chunnu scored, 75 marks in English, the passing marks are 70. Print "Passed in English", if he scored more than passing marks otherwise print "Failed".

//Nested
let subject = "English";

let marks = 5;

let pass_marks = 70;

if (subject == "English") {
  if (marks >= pass_marks) {
    console.log("Passed in English");
  }
}
else {
  console.log("Failed");
}

//Logical(AND)
if (subject == "English" && marks >= pass_marks) {
  console.log("Passed in English");
}
else {
  console.log("Failed");
}

//Ternary(AND)
subject == "English" && marks >= pass_marks ? console.log("Passed in English") : console.log("Failed")