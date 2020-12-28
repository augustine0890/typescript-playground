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