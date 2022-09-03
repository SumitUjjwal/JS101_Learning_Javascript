//If the total bill of a person is more than or equal the discount price then print give him a discount of 10% and print the new bill otherwise print the total bill.

var discount_price = 1999;
var total_bill = 1999;

if (total_bill>=discount_price){
  console.log(total_bill*0.9);
}
else {
  console.log(total_bill);
}