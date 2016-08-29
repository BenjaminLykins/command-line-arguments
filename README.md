[![Build Status](https://travis-ci.org/BenjaminLykins/command-line-arguments.svg?branch=master)](https://travis-ci.org/BenjaminLykins/command-line-arguments)
[![Coverage Status](https://coveralls.io/repos/github/BenjaminLykins/command-line-arguments/badge.svg?branch=master)](https://coveralls.io/github/BenjaminLykins/command-line-arguments?branch=master)
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

var params = cla.getGetCommandLineArguments(process.argv.slice(2,process.argv.length));
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

```
//$ node nouns.js person place thing

var cla = require('command-line-arguments');
var nouns = cla.getCommandLineArguments();

// nouns = ['person', 'place', 'thing'];
```

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
