/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

/* WRITE YOUR ANSWER HERE */
let num1 = 4;
let num2 = 5;
if (num1 > num2) {
  console.log("first number is larger");
} else {
  console.log("second number is larger");
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

/* WRITE YOUR ANSWER HERE */
let givenInt = 6;
if (givenInt === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */
let divInt = 25;
if (divInt % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("not divisible by 5");
}

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
let x = 1;
let y = 8;
if (x === 8 || y === 8 || x - y === 8 || x + y === 8) {
  console.log("true");
} else {
  console.log("not true");
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let totalShoppingCart = 40;
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + "+" + "free shipping");
} else {
  console.log((totalShoppingCart += 10));
}

//Using ternary
//let price = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let discount = totalShoppingCart * 0.2;
totalShoppingCart = totalShoppingCart - discount;
console.log(totalShoppingCart);

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
let c = 3;
let d = 6;
let e = 9;

if (c > d && c > e) {
  if (d > e) {
    console.log(c + ", " + d + ", " + e);
  } else {
    console.log(c + ", " + e + ", " + d);
  }
} else if (d > c && d > e) {
  if (c > e) {
    console.log(d + ", " + c + ", " + e);
  } else {
    console.log(d + ", " + e + ", " + c);
  }
} else if (e > c && e > d) {
  if (c > d) {
    console.log(e + ", " + c + ", " + d);
  } else {
    console.log(e + ", " + d + ", " + c);
  }
}

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

/* WRITE YOUR ANSWER HERE */
let givValue = 4.6;
console.log(typeof givValue);

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */
let checker = 6;
if (checker % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */
let val = 2;
if (val < 5) {
  console.log("Less than 5");
} else if (val < 10) {
  console.log("Less than 10");
} else {
  console.log("Greater than or equal to 10");
}

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */
let num = 6;
if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
}

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let isMale = false;
let gender = isMale ? "male" : "female";

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */
let i = 0;
while (i <= 5) {
  console.log(i++);
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */

for (let n = 0; n <= 10; n++) {
  console.log(n);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

/* WRITE YOUR ANSWER HERE */
for (let p = 0; p <= 10; p++) {
  if (p === 3 || p === 8) {
    continue;
  } else {
    console.log(p);
  }
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

for (let index = 0; index <= 15; index++) {
  if (index % 2 === 0) {
    console.log("even " + index);
  } else {
    console.log("odd " + index);
  }
}
/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */
for (let intFizz = 1; intFizz < 100; intFizz++) {
  if (intFizz % 3 === 0 && intFizz % 5 === 0) {
    console.log("FizzBuzz");
  } else if (intFizz % 3 === 0) {
    console.log("Fizz");
  } else if (intFizz % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(intFizz);
  }
}

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"*/

/* WRITE YOUR ANSWER HERE */

switch (new Date().getDay()) {
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
  // break;
  // default:
  //   console.log("invalid date");
}
