
let choice = 2;

if (choice == 1){
  console.log("Hindi");
}
else if (choice == 2){
  console.log("English");
}
else if (choice == 3){
  console.log("Marathi");
}
else if (choice == 4){
  console.log("Gujarati");
}
else if (choice == 5){
  console.log("Konakni");
}
else if (choice == 6){
  console.log("Kannada");
}
choice == 1? console.log("Hindi")
 :choice == 2? console.log("English")
   :choice == 3? console.log("Marathi")
     :choice == 4? console.log("Gujarati")
       :choice == 5? console.log("Konakni")
         :choice == 6? console.log("Kannada")


switch(choice) {
  case 1: console.log("Hindi");
    break;
  case 2: console.log("English");
    break;
  case 3: console.log("Marathi");
    break;
  case 4: console.log("Gujarati");
    break;
  case 5: console.log("Konakni");
    break;
  case 6: console.log("Kannada");
    break;
  default: console.log("Wrong Input");
 }