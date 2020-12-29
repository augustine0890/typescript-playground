# TypeScript Quickly

- Installing
`npm install typescript --save-dev`
`npm install parcel-bundler@1.9.1 --save-dev`

- Locally in your project.
`npm install -D typescript`
`npm install -D ts-node`
- Or globally with TypeScript.
`npm install -g typescript`
`npm install -g ts-node`

## Getting familiar with TypeScript

**Why program in TypeScript**
- TypeScipt is compile-to-JavaScript language. A program written in TypeScript has to be transpiled into JS first, and then it can be executed in the browser or a standalone JS engine.
- Complier: a program that takes source code written in one language and produce a output file in in some other language. (C cod --> binary executable (machine code)).
- Transpilers: are also known as source-to-source. Take in a source code file and convert it to another source code file in some other language or a different version of the same language. This output still has to through a compiler or interpreter to be able to run on the machine.
- JS may have hidden type-related bugs and other problems that will be revealed only after your JS code is complied.
- Errors are caught by the TypeScript static code analyzer as you type, even before you compile code with the Typescript compiler (tsc).

TS -compile-> JS -bundle-> JS (main.js) -deploy-> JS engine (main.js)

- _Bundle_: the process of combining serveral script files into one.

- _Node_: JS run-time enviroment

- The `main.js` file won't be generated until that error is fixed in `main.ts`
`tsc main --noEmitOnError true`

- Start a new TypeScript project
`tsc --init`

## Basic Types
- If you declare a variable without initializing it with a specific value, TypeScript uses the internal types `null` or `undefined`.

**Type Inferences**
- Declare a variable with a initial value, the variable can never be reassigned a value of a different data type.
- _Primitive_ data types: boolean, number, null, string, undefined
- Variable in declared without being assigned an initial value --> TS will consider a variable to be of type `any`.
- Variables of type `any` can be assigned to `any` value and TS won't give a error if they're reassigned to a different type later on.

**Type Annotations**
- Type declarations: add after their names by appending a variable with a colon `:` and the type.

## Functions
- Functions parameters may be given type annotations.
- Parameters aren't provide type annatations for are assumed to be of type `any`.

**Optional Parameters**
- To indicate a parameter is intentionally optional -> add `?` after its name. This tells TS that the parameter is allowed to be `undefined`.

**Void Return Type**
- If function is not return value then return type as `void`

**Documenting Functions**
- Use special tags within the comment to highlight certain aspects of the function.
- Can use `@param` to describle each of the function's parameters, and `@return` to describe what the function returns.




**The union type**
- Unions allow you to express that a value can be of several types.