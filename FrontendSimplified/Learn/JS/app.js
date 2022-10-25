// console.log('Practice '+ 'Like a Boss')
// let str = "Josiah"
// console.log(str[0])
// console.log(str.length)
// console.log(str[str.length-1])
// let celcius = 10;

let cash = 45;
let price = 40;

if (cash > price) {
  console.log(`you paid extra - here's ${cash - price} dollars of change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${price - cash} dollars`);
}

// COMPARISON OPERATORS
/**
 * == Equal values
 * === Equal values and types
 * != Not equal
 * !== Not equal value and equal type
 * < Less than
 * > Greater than
 * <= Less than or equal to
 * >= Greater than or equal to
 */

// lOGICAL OPERATORS
/**
 * && - Checks if the left and right side of the comparison is true
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false & false --> false
 */

let isStoreOpen = true;
if (cash >= price && isStoreOpen === true) {
  console.log("print the receipt");
}

/**
 * || - checks if left or right side of the comparison is true
 * true || true --> true
 * false || false --> false
 * true || false --> true
 * false || true --> true
 */

// FALSY VALUES (opp. Truthy values)
/**
 * considered as 'false' when converted to a boolean
 * e.g.
 * - undefined
 * - null
 * - NaN
 * - 0
 * - "" (empty strings)
 * - false
 */

// TERNARY OPERATORS
/**
 * - It is a shortcut for an if else condition
 * isObese ? 'unhealthy':'healthy'
 * subscribed? 'show video':'hide video'
 */

let hot = true;
hot ? console.log("weather is hot outside") : console.log("weather is cold");
let subscribed = false;
let loggedIn = true;

let str = subscribed && loggedIn ? "show the video" : "hide the video";
console.log(str);

// Exercise: Print out 'give receipt' if cash is more than the price and if the store is open. Print out 'do not give receipt' if cash is less than price or if the store is not open.

let diff = cash >= price;

let decide = isStoreOpen && diff ? "give receipt" : "do not give receipt";
console.log(decide);

// lOOPS
/** N:B Do not repeat yourself!
 *let count = 1
 *while (count <= 100) {
 *    console.log(count)
 *    count = count + 1
 *}
 *
 *for (let i = 0; i <= 100; i++) {
 *console.log(i);
 *}
 */

//THE FIZZBUZZ Exercise
/** Part A
 * Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print 'Frontend'
 * If the number is divisble by 5, print 'Simplified'
 * If the number is divisible by 3,5, print 'Frontend Simplified'
 * If the number is NOT divisble by 3,5, print the number
 */

for (i = 0; i <= 20; ++i) {
  let three = i % 3;
  let five = i % 5;
  let thfv = i % 15;
  if (!thfv) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (!five) {
    console.log(`${i} -> Simplified`);
  } else if (!three) {
    console.log(`${i} -> Frontend `);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

/** Part B
 * Print out every character from the string:
 * 'Frontend Simplified'
 *
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */

let strg = "Frontend Simplified";
for (i in strg) {
  console.log(strg[i]);
}

//FUNCTIONS
/**
 * DRY - Don't Repeat Yourself
 */
//Function defination - parameters
function welcomePerson(person) {
  console.log(`Welcome, ${person}`);
}
function fn(a, b) {
  return a + b;
}
//Function calling - arguements
welcomePerson("Josiah");
console.log(fn(5, 16));
// Exercise:
/**
 * Create a function that converts Celcius to Fahrenheit
 * Formula: F = C x 1.8 + 32
 * @example
 * convCtoF(0) - 32
 * convCtoF(10) -50
 */
function convCtoF(temp) {
  F = temp * 1.8 + 32;
  return F;
}
console.log(convCtoF(10));

const convtCtoF = (temp) => {
  return temp * 1.8 + 32;
}; //Arrow Functions
console.log(convtCtoF(100));
console.log("_____________");

//ARRAYS
console.log("ARRAYS");
console.log("----basics");
let arr = [20, 30, 40, 50, 100];
console.log(arr[arr.length - 1]); //final element of array
arr.push(200); //adding an element to the end of array
console.log(arr);

console.log("----filter");
let newArr = arr.filter(element => element < 50);
console.log(newArr);

// Array Exercise
console.log("--exercise1--");
/**
 * Filter out all the 'fail' elements in array
 * @examples
 * ['A+', 'A', 'FAIL'] -> ['A+', 'A']
 */
let grades = ['A+', 'A', 'FAIL']
let newGrades = grades.filter(element => element !== 'FAIL');// with filter method
console.log(newGrades)
let brandGrades = []
for (i in grades) { //without filter method
    if (grades[i] !== 'FAIL') {
        brandGrades.push(grades[i])
    }
}
console.log(brandGrades)

console.log("----map");
let arry = [1,4,5,16]
console.log(arry);
//useful when you want to turn elements of an array into another element
let newArry = arr.map(element => 'cents')
console.log(newArry);

console.log("--exercise2--");
/**
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * [1,2,3,4] -> [100,200,300,400]
 */
let dollars = [1,2,3,4,5]
let newDollars = dollars.map ((element) => {
    return element * 100;
})
console.log(newDollars)