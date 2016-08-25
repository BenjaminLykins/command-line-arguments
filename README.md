# command-line-arguments
Serialize JavaScript objects from command line arguments

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
var cla = require('./command-line-arguments');

var params = cla.getGetCommandLineArguments(process.argv.slice(2,process.argv.length));
console.log(params.firstname); //prints john
```

##Install
```
npm install command-line-arguments --save
```

##Examples

```
//$ node addFoods.js food -name --hamburger -calories --400 -name --hotdog -calories --350
```

#Licensing
This project is licensed under the terms of the MIT license
