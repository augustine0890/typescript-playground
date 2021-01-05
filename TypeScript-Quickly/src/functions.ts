// Parameeter Type Annotations
function triple(value: number) {
    return value * 3;
}

console.log(triple(3));

function greetTripled(greeting: string, value: number) {
    console.log(`${greeting}, ${triple(value)}`!);
}

greetTripled('Augustine', 2);

// Optional Parameters
function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
}
proclaim();
proclaim('ready?');
proclaim('ready!');

// Defaul Parameters
/**
 * Print out the status.
 *
 * @param status - The first input string as default is 'not ready...'
 * @param repeat - The second input number
 * @returns The proclaim status of `status` and `repeat`
 *
 */

function proclaim2(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
proclaim2();
proclaim2('ready?');
proclaim2('ready!');

// Inferring Return Types
function ouncesToCups(ounces: number) {
    return `${ounces / 16} cups.`;
}
const liquidAmount: string = ouncesToCups(3);
console.log(liquidAmount);

let myVar = Math.random();
console.log(myVar);

// Explicit Return Types
import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'

function returnFruit(): string {
    let num = getUserChoice();
    switch(num) {
      case 1 : return f1();
          case 2 : return f2();
          case 3 : return f3();
          case 4 : return f4();
          case 5 : return f5();
          case 6 : return f6();
          case 7 : return f7();
          case 8 : return f8();
        //   case 9 : return f9(); //The problematic function is f9()
          case 10 : return f10();
          case 11 : return f11();
          case 12 : return f12();
    }
    return 'durian.jpg'
}
console.log(returnFruit());

// Void Return Type
/**
 * Print out the salad.
 *
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns The salad formular of `fruit1` and `fruit2`
 *
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
makeFruitSalad('banana','pineapple');

function useMagnifyingGlass(): string {
    return 'I will use my magnifying glass.'
}
  
function determineCulprit(): number{
    return Math.floor(Math.random()*2+1)
}
  
function doSleuthing(numberOfClues:number, clue1:string, clue2:string, suspect1:string, suspect2:string): string {
    console.log('I am a famous detective and I will solve the crime.');
    let unnecessaryVariable = 'Why is this here?'
    unnecessaryVariable = useMagnifyingGlass();
  
    console.log('Now I consider the first clue: ', clue1);
    console.log('Now I consider the second clue: ', clue1);
  
    let culpritNumber = determineCulprit();
    console.log('Now, I will return to you the culprit. There but for the grace of God go we.' );
    if(culpritNumber == 1) {return(suspect1)}
    if(culpritNumber == 2) {return(suspect2)}
    
    return "I couldn't figure out who drank the priceless milk. :( :("
}
  
let answer: string;
answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')
console.log('The culprit was none other than ', answer, '!');