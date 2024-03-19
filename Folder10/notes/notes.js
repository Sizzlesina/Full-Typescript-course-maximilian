/** @format */

{/* prettier-ignore */}

/*
@ Splitting Code Into Multiple Files:
++ Namespaces and file bundling:
- Use "namespace" code syntax to group code
- Per-file on bundled complilation is possible (less imports to manage)

++ ES6 Imports/Exports:
- Use ES6 import/ export syntax
- Per-file compilation but single <script> import 
- Bundling via third-party tools (e.g. Webpack) is possible!

@ How to bundle the ts project using namespace?:
1- Create different folder and files of that with a specified purpose
2- Move the files to the folders
3- in the new files of the folders we use this syntax:
++ namespace NameOfTheNameSpace {
++  ... Commands
++  (export whenever in need)
++ }


4- use this syntax to import the files;
++ ///<reference path="PathOfTheFile" />

5- use the same namespace with the same name in the root file and then write the codes inside the namespace
* Then we can use the project as same as before
!HINT: Before doing these uncomment the outFile and then write a outFile directory for it to tell compiler to compile all the ts files into just one js file like bundle.js


@ Splitting files in the project using ES Modules:
- Using export import as same as React applications
- But some hints must be told:
++ 1- In the index.html file we will change the script type to module:
? Syntax:
<script type="module" src="rootFile"></script>

++ 2- We must change the Module property value in the tsconfig file to ES2015 
++ 3- We must use ".js" at the end of files so the files will got imported correctly\
!HINT: After this method we dont need to use any namespace and reference in our project so the codes will be cleaner


@ How to group imports?:
- When we want to import two or more things from a same file we group importing them using the "*" and then with dot notations we can have access to the exported methods of that
++ Syntax:
import * as someName from "SomeDirectory";
- Or we can use the default export and import 

@ When we creating an object inside a seperated file when will the object will be created?
- When we import the file the object in that file will start executing

*/
