/*
@ Watch mode:
- We can use "tsc fileName.ts --w" to go into watch mode 
- With watch mode whenever we change the codes from our ts file our js file will be changed

@ How to compile the entire project multiple files?:
- We can use the "tsc --init" command to compile the entire project then use the tsc --watched or tsc --w to watch all the project
---------------------------------------------------------------------------------------------------------------------------------------------------
@ exclude files:
- In the root directory of the project we can write this commands in the tsconfig.json file to tell Typescript to NOT compile a specified file
++ Command:
"exclude" : [
  (File name)
]
!HINT: node moduls would be the default exclude

@ include files:
- We tell the Typescript that we want to compile this file too:
++ Command:
"include":[
  (File name)
]
---------------------------------------------------------------------------------------------------------------------------------------------------
@ Official compiler options docs:
https://www.typescriptlang.org/docs/handbook/compiler-options.html
@ Official tsconfig docs:
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
---------------------------------------------------------------------------------------------------------------------------------------------------
@ Commenting out the "lib" part from tsconfig file:
- When we do such a thing we can specify some libraries into our Typescript app and with this commands we will get the same default bahavior as setting the target of the compiler to "es6":
++  "lib": [
++      "dom",
++      "es6",
++      "dom.iterable",
++      "scripthost"
++    ] 

@  "sourceMap": true:
- This part of the tsconfig file will also show the Typescript files inside the Js files in the browser sources 
---------------------------------------------------------------------------------------------------------------------------------------------------
@ outDir and rootDir:
- outDir : We can move the compiled files of the typescript to another folder with writing the directory of the file inside the outDir property
- rootDir : We can move the ts files that want to be compiled into another folder and then the compiler must just look up to the directory that we write inside the 
---------------------------------------------------------------------------------------------------------------------------------------------------
@ removeComments:
- Any comment inside the ts file will be removed in the compiled js file
---------------------------------------------------------------------------------------------------------------------------------------------------
@ downlevelIteration:
- This command is used for loops in the js file (If the loops inside the js file is not working we can set this to true)
---------------------------------------------------------------------------------------------------------------------------------------------------
@ "noEmitOnError": true:
- When we have a error inside our typescript file then it wont compile the file
---------------------------------------------------------------------------------------------------------------------------------------------------
@ strict mode:
- We can just set the "strict" to true and we can type check in the ts files whenever we want

++ For example:
@ strictNullChecks:
- This property is said that when a variable type is null dont give me a error
---------------------------------------------------------------------------------------------------------------------------------------------------
@ noUnusedlocals and noUnusedParameters:
- noUnusedLocals : It will give us an warning if a variable is declared but its value never used
- noUnusedParameters : It will give us an warning if a parameter is declared but the value to it never passed
---------------------------------------------------------------------------------------------------------------------------------------------------
@ Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.
@ These links might also be interesting:

* tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
* Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
* VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
---------------------------------------------------------------------------------------------------------------------------------------------------

*/