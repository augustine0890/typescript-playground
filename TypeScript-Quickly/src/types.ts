let aged = true;
let realAge = 0;

if (aged) {
    realAge = 4;
}

let dogAge = realAge * 7;
console.log(`${dogAge} years`);

// Types Shapes
let myName = 'Augustine';
console.log(myName.toUpperCase());
console.log(myName.length);

// Any
let guess;
guess = 'blue';
guess = 1;

// Variable Type Annotations
let phoneNumber: string;
if (Math.random() > 0.5) {
    phoneNumber = '+4243456435345';
} else {
    phoneNumber = '+545643919345';
}