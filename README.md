# command-line-arguments
Serialize JavaScript objects from command line arguments

## Synopsis
You can make objects directly from command line arguments using the simple notation
```
$ node AddContact person -firstname --john -lastname --smith
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
using command-line-arguments

## Usage

```
var cla = require('./command-line-arguments');
var params = cla.getGetCommandLineArguments(process.argv.slice(2,process.argv.length));
```
