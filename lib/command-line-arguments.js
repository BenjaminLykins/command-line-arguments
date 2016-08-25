//Returns true if the current element is the lowest in the current recursion cycle
function isFirstLevel(element){
  //console.log("isFirstLevel(" + element + ")");
  if(element.substring(0,1) != '-'){
    //console.log("-> true");
    return true;
  }
  else{
    //console.log("-> false");
    return false;
  }
}

//Returns true if there are no more sublevels after current level
function isLastLevel(arr){
  //console.log("isLastLevel(" + arr + ")");
  if(!arr){
    return true;
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i].substring(0,1) === '-'){
      //console.log("->false");
      return false;
    }
  }
  //console.log("-> true");
  return true;
}

//Returns sub levels with the dashes still intact
function seeSubLevels(arr){
  //console.log("seeSubLevels(" + arr + ")");
  for(var i = 1; i < arr.length; i++){
    if(arr[i].substring(0,1) != '-'){
      //console.log("->" + arr.slice(1, i));
      return arr.slice(1, i);
    }
  }
  //If the entire rest of the array is part of the sublevel, return it all
  //console.log("->" + arr.slice(1,arr.length));
  return arr.slice(1,arr.length);
}

function getSubLevels(arr){
  //console.log("getSubLevels(" + arr + ")");
  if(arr.length === 0)
    return null;
  for(var i = 1; i < arr.length; i++){
    if(arr[i].substring(0,1) != '-'){
      //console.log("->" + arr.slice(1, i));
      if(arr.slice(1, i).length === 1)
        return arr[1];
      if(arr.slice(1, i).length === 0)
        return null;
      return arr.slice(1, i);
    }
    arr[i] = arr[i].substring(1,arr[i].length);
  }
  //console.log("->"+arr.slice(1,arr.length));
  if(arr.slice(1, i).length === 1)
    return arr[1];
  if(arr.slice(1, i).length === 0)
    return null;
  return arr.slice(1,arr.length);
}

function getLevel(str){
  for(var i = 0; i <= str.length; i++){
    if(str.substring(i,i+1) != '-'){
      return i;
    }
  }
  return str.length;
}

function validateInput(arr){
  for(var i = 0; i < arr.length - 1; i++){
    if(getLevel(arr[i + 1]) - getLevel(arr[i]) > 1){
      arr.splice(i + 1, 1);
      return validateInput(arr);
    }
  }
  return arr;
}

function recurse(arr){
  //console.log("recurse(" + arr + ")");
  var obj = {};
  for(var i = 0; i < arr.length; i++){
    if(isFirstLevel(arr[i])){
      //If last level, then return values
      if(isLastLevel(getSubLevels(arr.slice(i,arr.length)))){
        if(typeof obj[arr[i]] === "undefined" || obj[arr[i]] === null){
          //obj[arr[i]] = getSubLevels(arr.slice(i,arr.length));
        }
        else{
          //obj[arr[i]] = [obj[arr[i]], getSubLevels(arr.slice(i,arr.length))];
        }
        obj[arr[i]] = getSubLevels(arr.slice(i,arr.length));
        //console.log("->");
        //console.log(obj);
        //return obj;
      }
      else{
        obj[arr[i]] = recurse(getSubLevels(arr.slice(i,arr.length)));
      }
    }
  }
  //console.log("->");
  //console.log(obj);
  return obj;
}

var params = process.argv.slice(2,process.argv.length);
//var args = recurse(process.argv);
//console.log(args);

function getGetCommandLineArguments(params){
  return recurse(params);
}
//getGetCommandLineArguments(params);

//console.log(validateInput(process.argv.slice(2,process.argv.length)));

module.exports = {
  getGetCommandLineArguments: function(params){
    //params = validateInput(params);
    return recurse(params);
  }
}
