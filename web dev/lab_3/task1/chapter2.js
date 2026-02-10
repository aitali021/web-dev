// Variables
let name = "John";
let admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = '18.04.1982';
const eage = someCode(BIRTHDAY);

// Data Types
let myName = "Ilya";
alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${myName}`);

let a = 1, b = 1;
let c = ++a;
let d = b++;
alert(a);
alert(b);
alert(c);
alert(d);

alert("" + 1 + 0);
alert("" - 1 + 0);
alert(true + false);
alert(6 / "3");
alert("2" * "3");
alert(4 + 5 + "px");
alert("$" + 4 + 5);
alert("4" - 2);
alert("4px" - 2);
alert("  -9  " + 5);
alert("  -9  " - 5);
alert(null + 1);
alert(undefined + 1);
alert(" \t \n" - 2);

// Operators
a = 1, b = 1;
c = ++a;
d = b++;
alert(a);
alert(b);
alert(c);
alert(d);

a = 2;
let x = 1 + (a *= 2);
alert(a);
alert(x);

// Comparisons
alert(5 > 4);
alert("apple" > "pineapple");
alert("2" > "12");
alert(undefined == null);
alert(undefined === null);
alert(null == "\n0\n");
alert(null === +"\n0\n");

// Conditional operators
if ("0") {
    alert('Hello');
}

let answer = prompt('What is the "official" name of JavaScript?', '');
if (answer == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? ECMAScript!');
}

let value = prompt('Type a number', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let login = 'Employee';
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '';

// Logical operators
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || 2 && 3 || 4);

let age = prompt('Your age?', 18);
if (age >= 14 && age <= 90) {
    alert('Age is between 14 and 90');
}

if (!(age >= 14 && age <= 90)) {
    alert('Age is NOT between 14 and 90');
}

// Loops
let i = 3;
while (i) {
    alert(i--);
}

let j = 0;
while (++j < 5) alert(j);

let k = 0;
while (k++ < 5) alert(k);

for (let num = 2; num <= 10; num++) {
    if (num % 2 == 0) {
        alert(num);
    }
}

let n = 0;
while (n < 3) {
    alert(`number ${n}!`);
    n++;
}

let number;
do {
    number = prompt("Enter a number greater than 100?", 0);
} while (number <= 100 && number);

// Functions
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

x = prompt("x?", '');
n = prompt("n?", '');
if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x, n));
}