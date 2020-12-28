let customerId: string;
// customerId = 123 // compile-time error

function getFinalPrice(price: number, discount: number): number {
    return price - price/discount;
}

console.log(getFinalPrice(100, 10));
// console.log(getFinalPrice(100, "10%"));