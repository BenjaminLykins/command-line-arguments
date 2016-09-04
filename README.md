[![Build Status](https://travis-ci.org/BenjaminLykins/command-line-arguments.svg?branch=master)](https://travis-ci.org/BenjaminLykins/command-line-arguments)
[![Coverage Status](https://coveralls.io/repos/github/BenjaminLykins/command-line-arguments/badge.svg?branch=master)](https://coveralls.io/github/BenjaminLykins/command-line-arguments?branch=master)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)](https://www.npmjs.com/package/command-line-arguments)
# command-line-arguments
Simple way to serialize JavaScript objects from command line arguments

## Synopsis
You can make JSON style objects directly from command line arguments using the simple notation
```
$ node add-contact.js person -firstname --john -lastname --smith
```
Would serialize to
```
{
  person: {
    firstname: 'john',
    lastname: 'smith'
  }
}
```
## Usage
```
//$ exampleProgram person -firstname --john -lastname --smith

var cla = require('command-line-arguments');

var params = cla.getCommandLineArguments();
console.log(params.firstname); //prints john

```

##Install
```
npm install command-line-arguments --save
```

##Examples
```
//$ node addFood.js name -hotdog calories -400 primary-ingredients -bun -dog -mustard -ketchup

var cla = require('command-line-arguments');
food = cla.getCommandLineArguments();

// food =
//  {
//    name: 'hotdog',
//    calories: '400',
//    'primary-ingredients': [ 'bun', 'dog', 'mustard', 'ketchup' ]
//  };
```

Simple arrays are supported
```
//$ node nouns.js person place thing

var cla = require('command-line-arguments');
var nouns = cla.getCommandLineArguments();

// nouns = ['person', 'place', 'thing'];
```

You can pass in the parameters if you need to, or pass in no parameters and it will automatically read the command line arguments
```
//$ node program.js

var params = ['car', '-model', '--2001 Toyota Corolla', '-milage', '--219,000', '-color', '--tan' ];
var paramsParsed = cla.getCommandLineArguments(params);

// paramsParsed = {
//  car: {
//    model: '2001 Toyota Corolla',
//    milage: '219,000',
//    color: 'tan'
//  }
//}
```

##Licensing
This project is licensed under the terms of the MIT license
