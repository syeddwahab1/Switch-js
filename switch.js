// switch = statement that evaluates a value/expression , matches the value to many case clauses
// its more efficient than many else if statements

var grade = "f";
switch (grade) {
  case "a":
    console.log("you did great");
    break;
  case "b":
    console.log("you did okay");
    break;
  case "f":
    console.log("you failed");
    break;
    //in case any of the switch case is not satisfied we go to default 
    default: 
    console.log("you will be graded later ")
}
// cases.used for multiple conditions
var month = +prompt("enter month number wise");
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feburary");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
}