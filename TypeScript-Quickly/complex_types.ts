// Arrays
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];
console.log(bestBreakfasts);

// Multi-dimensional Arrays
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7], bestNumbers] ];
console.log(numbersMulti);

// Tuples
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['ok', 'ok'];
tup = ['ok', 'ok'];
// tup =  arr; // Type Error!
let favoriteCoordinates: [number, number, string, number, number, string] = [17, 45, 'N', 142, 30, 'E'];
// favoriteCoordinates[6] = -6.825;

// Array Type Inference
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
let myArr = dogTup.concat([]);
myArr[10] = 'not a dog';
console.log(myArr);

// Rest parameters
function smush(firstString: string, ...otherStrings: string[]){
    let output = firstString;
    for(let i = 0; i < otherStrings.length; i++){
      output = output.concat(otherStrings[i]);
    }
    return output;
}
console.log(smush('a', 'h', 'h'));

function addPower(p: number, ...numsToAdd: number[]): number {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
// addPower('a string', 4, 5, 6); //Type error
console.log(addPower(2, 4, 5, 6));

// Spread Syntax
function perforDanceMove(moveName: string, moveReps: number, hasFlair: boolean): void {
    console.log(`I do the ${moveName} ${moveReps} times!`);
    
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}

let danceMoves: [string, number, boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];

danceMoves.forEach(move =>
    perforDanceMove(...move)
)

// Enums
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// enum Pet {
//   Hamster,
//   Rat,
//   Chinchilla,
//   Tarantula
// }

// let petOnSaleTS: Pet = Pet.Chinchilla;

// let ordersArrayTS: [Pet, number][] = [
//   [Pet.Rat, 2],
//   [Pet.Chinchilla, 1],
//   [Pet.Hamster, 2],
//   [Pet.Chinchilla, 50]
// ];
// ordersArrayTS.push([Pet.Jerboa, 3]);
enum Pet {
    Hamster = 'HAMSTER',
    Rat = 'RAT',
    Chinchilla = 'CHINCHILLA',
    Tarantula = 'TARANTULA'
  }
  
  let petOnSaleTS: Pet = Pet.Chinchilla;
  
  let ordersArrayTS: [Pet, number][] = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
  ];
  
//   ordersArrayTS.push(['HAMSTER', 1]);

// Object Types
function sayHappyBirthdayWithObject(personObject: {name: string, age: number, giftWish: string, success: boolean}){
  let output ='';
  output += 'Happy Birthday '
         + personObject.name + '! ';
  output += 'You are now ' 
         + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' 
         + personObject.giftWish 
         + '. And guess what? You will ';
  if (!personObject.success){
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

let birthdayBabies: {name: string, age: number, giftWish: string, success: boolean}[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

birthdayBabies.forEach(sayHappyBirthdayWithObject);

// Type Aliases
type Coord = [
  number,
  number,
  string,
  number,
  number,
  string
]
let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];

// Function Types
type OperatorFunction = (a: number, b: number) => number;

function add(a: number, b: number) { return a+b }
function subtract(a: number, b: number){ return a-b }
function multiply(a: number, b: number){ return a*b}
function divide(a: number, b: number){ return a/b}
function wrongAdd(a: number, b: number){return (a+b)+''}


// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  console.log('Now fill out this worksheet.')
}

// Call your functions below:
mathTutor(multiply);
// mathTutor(wrongAdd);

// Generic Types
type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};

let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6);
coordinateArray = getFilledArray<[number, number]>([3,4], 6);