//var cla = require("./lib/command-line-arguments.js");
var cla = require("./index.js")
console.log(cla.getGetCommandLineArguments(process.argv.slice(2,process.argv.length)));
