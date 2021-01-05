let customerId: string;
// customerId = 123 // compile-time error

function getFinalPrice(price: number, discount: number): number {
    return price - price/discount;
}

console.log(getFinalPrice(100, 10));
// console.log(getFinalPrice(100, "10%"));

// Basic Types
let firstName: string;
let age: number;
let isClose: boolean;

function calcTax(state: string, income: number, dependents: number): number | undefined {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

let tax = calcTax('NJ', 50000, 2);
// let tax: number = calcTax('NJ', 50000, 'two');
console.log(tax);

let padding: string | number;

function padLeft(value: string, padding: any): string {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello, world", 4));
console.log(padLeft("Hello, world", 4));
// console.log(padLeft("Hello, world", false));