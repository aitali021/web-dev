// Methods of primitives
let str = "Hello";
str.test = 5;
alert(str.test); // undefined

// Numbers
let a = +prompt("First number?", 0);
let b = +prompt("Second number?", 0);
alert(a + b);

alert(6.35.toFixed(20));
alert(Math.round(6.35 * 10) / 10);

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number", 0);
    } while (!isFinite(num));
    
    if (num === null || num === '') return null;
    
    return +num;
}

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) {
        alert(i);
    }
}

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

// Strings
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
        str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}

// Arrays
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");

function sumInput() {
    let numbers = [];
    
    while (true) {
        let value = prompt("A number please?", 0);
        
        if (value === "" || value === null || !isFinite(value)) break;
        
        numbers.push(+value);
    }
    
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    
    return maxSum;
}

// Array methods
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

function copySorted(arr) {
    return arr.slice().sort();
}

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    
    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return this.methods[op](a, b);
    };
    
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// Iterables
let range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num);
}

// Map and Set
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert(unique(values));

function aclean(arr) {
    let map = new Map();
    
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    
    return Array.from(map.values());
}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr2));

// WeakMap and WeakSet
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

// Object.keys, values, entries
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries));

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user));

// Destructuring assignment
let user3 = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user3;

alert(name);
alert(age);
alert(isAdmin);

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    
    return maxName;
}

// Date and time
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let date2 = new Date(2012, 0, 3);
alert(getWeekDay(date2));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day;
}

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date3 = new Date(2015, 0, 2);
alert(getDateAgo(date3, 1));
alert(getDateAgo(date3, 2));
alert(getDateAgo(date3, 365));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}

alert(getSecondsToday());

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

alert(getSecondsToTomorrow());

function formatDate(date) {
    let diff = new Date() - date;
    
    if (diff < 1000) {
        return 'right now';
    }
    
    let sec = Math.floor(diff / 1000);
    
    if (sec < 60) {
        return sec + ' sec. ago';
    }
    
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' min. ago';
    }
    
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

// JSON methods, toJSON
let user4 = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(user4);
let parsed = JSON.parse(json);

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let json2 = JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
});

alert(json2);