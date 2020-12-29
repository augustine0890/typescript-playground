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
