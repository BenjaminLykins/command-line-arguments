'use strict';

var expect = require('chai').expect;
var cla = require('../index.js');

describe('#command-line-arguments', function() {
    it('#Standard Test', function() {
        var result = cla.getGetCommandLineArguments(['person', '-firstname', '--Benjamin', '-lastname', '--Lykins', '-birthday', '--7/1/95']);
        var expected = {
          person: {
            firstname: 'Benjamin',
            lastname: 'Lykins',
            birthday: '7/1/95'
          }
        };
        expect(result).to.deep.equal(expected);
    });
    it('#Test Using Arrays', function(){
      var result = cla.getGetCommandLineArguments(['FavoriteThings', '-sports', '--basketball', '--baseball', '--football',
    '-languages', '--JavaScript', '--Python', '--HTML']);
      var expected = {
        FavoriteThings: {
          sports: ['basketball', 'baseball','football'],
          languages: ['JavaScript', 'Python', 'HTML']
        }
      };
      expect(result).to.deep.equal(expected);
    });
    it('#Empty List', function(){
      var result = cla.getGetCommandLineArguments([]);
      var expected = {};
      expect(result).to.deep.equal(expected);
    });
    it('#Bad Inputs', function(){
      var result = cla.getGetCommandLineArguments(['person', '-firstname', '--Benjamin', '----badinput', '-lastname', '--Lykins', '-birthday', '--7/1/95']);
      var expected = {
        person: {
          firstname: 'Benjamin',
          lastname: 'Lykins',
          birthday: '7/1/95'
        }
      };
      expect(result).to.deep.equal(expected);
    })
    //Need bad input test
});
