/** @format */

{/*prettier-ignore */}

/*
@ What is webpack and why we need it?:
++ Webpack:
- Is a bundling & "Build Orchenstration" tool
? "Normal" setup:
1 - Multiple .ts files & imports (Http requests)
2 - Unoptimized code (not as small as possible)
3 - "External" development server needed
? With webpack:
1 - Code bundles, less imports required
2 - Optimized (minified) code , less code to download 
3 - More build steps can be added easily

@ Installing webpack:
npm install --save-dev webpack wenpack-cli webpack-dev-server typescript ts-loader 

@ How to use webpack?:
1 - Create a webpack.config.js file and write these piece of code in it:
++ module.exports = {};
2 - Remove the ".js" from the end of files
3- In the {} write the entry file that is the root ts project file
4- In the output write the filename and path of the output file 
? Syntax:
! The steps are too much i will just copy paste the final syntax of the webpack.config.js file:
const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

5- Now in the tsconfig.json file we will add a "build" in the scripts and then run "webpack" on "npm run build"

* But at the end the new and better syntax for this webpack.config.js file is this:
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
!HINT: This syntax is for the development now we want something for the production
@ How to create a webpack file to be used in the production?:
++ 1- Create a webpack.config.prod.js file (The name is up to you)
++ 2- npm i --save-dev clean-webpack-plugin
++ 3- In the file write these syntax:
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ],
};

++ 4- In the tsconfig file add this line:
 "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack --config webpack.config.prod.js", // ! This line in the scripts
  },

++ 5- npm run build so we get build from the project
*/
