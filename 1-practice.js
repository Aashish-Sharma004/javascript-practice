// js basics & output
console.log("welcome to JavaScript");


//alert("welcome to JavaScript");  // makes popup on html page


//document.write("welcome to JavaScript");  //write directely to html page

console.log(5+10); // it will sum

// variable , let , const,

var username = ("Aashish");
console.log(username);

const PI = 3.14;
console.log(PI);

  //PI = 3.14567 
//console.log("updated" + PI);



// Data type
let name = "Aashish";
let age = 21;
let isStudent = true;
let address ;
let mmarks = null;


console.table({
  name: {value:  name, type: typeof name },
  age: { value: age, type: typeof age },
  isStudent: { value: isStudent, type: typeof isStudent },
  address: { value: address, type: typeof address },
  mmarks: { value: mmarks, type: typeof mmarks }
});

// oertators

let a = 5;
let b = 8;

console.log(a + b);
console.log(a - b);
console.log(a/b);
console.log(a * b);
console.log( a ** b);
console.log(a % b);

//concatenate two strings

let firstName = "Aashish";
let lastName = "Sharma";

let fullName = firstName + " " + lastName;
console.log(fullName); 


let fullname = `${firstName} ${lastName}`;
console.log(fullname); 

// check number is even
let number = 10;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}


//conditional statements

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}




let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}


//switch

let dayNumber = 2;

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}

