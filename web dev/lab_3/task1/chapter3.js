// Debugging in the browser
function pow(x, n) {
    let result = 1;
    
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    
    return result;
}

// Test cases
console.log(pow(2, 2));  // Should be 4
console.log(pow(2, 3));  // Should be 8
console.log(pow(3, 2));  // Should be 9

// Automated testing with Mocha (example structure)
describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3, 4), 81);
    });
    
    it("2 raised to power 0 is 1", function() {
        assert.equal(pow(2, 0), 1);
    });
});

// Polyfills (example)
if (!Math.trunc) {
    Math.trunc = function(number) {
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
}

// Comments
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        // check if i is a prime number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i); // a prime
    }
}

// Coding style
let userName = "John";
let userAge = 25;

function calculateSum(a, b) {
    return a + b;
}

if (userAge > 18) {
    console.log("Adult");
}