/* exported titleCase */
function titleCase(title) {
  var titleString = '';
  var tempString = '';
  var dashDetect = false;
  var colonChecker = '';
  for (var i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      tempString += title[i].toLowerCase();
      if (title[i] === '-') {
        dashDetect = true;
      }
    } else {
      if (tempString.length > 3) {
        var fourWordMore = strFourMore(tempString, dashDetect, colonChecker);
        if (titleString.length === 0) {
          titleString += fourWordMore[0].toUpperCase();
          for (var j = 1; j < fourWordMore.length; j++) {
            titleString += fourWordMore[j];
          }
        } else {
          titleString += fourWordMore;
        }
        titleString += ' ';
        colonChecker = titleString[titleString.length - 2];
        tempString = '';
        dashDetect = false;
      } else if (tempString.length <= 3) {
        var threeWordLess = strThreeLess(tempString, dashDetect, colonChecker);
        if (titleString.length === 0) {
          titleString += threeWordLess[0].toUpperCase();
          for (var k = 1; k < threeWordLess.length; k++) {
            titleString += threeWordLess[k];
          }
        } else {
          titleString += threeWordLess;
        }
        titleString += ' ';
        colonChecker = titleString[titleString.length - 2];
        tempString = '';
      }
    }
  }
  if (tempString.length > 3) {
    fourWordMore = strFourMore(tempString, dashDetect, colonChecker);
    titleString += fourWordMore;
  } else if (tempString.length <= 3) {
    threeWordLess = strThreeLess(tempString, dashDetect, colonChecker);
    titleString += threeWordLess;
  }
  // console.log('final:', titleString)
  return titleString;
}

function strFourMore(string, dashDetect, colonChecker) {
  var temp = '';
  if (dashDetect === true) {
    temp += string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
      if (string[i - 1] === '-') {
        temp += string[i].toUpperCase();
      } else {
        temp += string[i];
      }
    }
    return temp;
  } else if (string === 'javascript') {
    temp += 'JavaScript';
    return temp;
  } else if (string === 'javascript:') {
    temp += 'JavaScript:';
    return temp;
  } else {
    temp += string[0].toUpperCase();
    for (var j = 1; j < string.length; j++) {
      temp += string[j];
    }
    return temp;
  }
}

function strThreeLess(string, dashDetect, colonChecker) {
  var conjunctionsWords = ['and', 'or', 'not', 'but', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];
  var temp = '';
  if (string === 'api') {
    temp += string.toUpperCase();
    return temp;
  } else if (colonChecker === ':') {
    temp += string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
      temp += string[i];
    }
    return temp;
  } else if (conjunctionsWords.indexOf(string) !== -1) {
    temp += string;
    return temp;
  } else {
    temp += string[0].toUpperCase();
    for (var j = 1; j < string.length; j++) {
      temp += string[j];
    }
    return temp;
  }
}
// create a function for string more than four charcter with three parameter (string, dashDetect, colonChecker)
// create temp variable
// check if current string has dash
//      if yes convert first character to uppercase and add it to the temp variable
//      go through rest of charctar of the string
//      check if previous charcter was dash or not
//            if yes convert current character to uppercase and add it to the temp variable
//      else
//      add current charcter to the temp string
//      retuen the temp variable
// check if current string is 'javascript'
//      if yes add 'JavaScript' to the temp variable
//      retuen the temp variable
// check if current string is 'javascript:'
//      if yes add 'JavaScript:' to the temp variable
//      retuen the temp variable
// convert first charcter of the temp variable to uppercase and add to the temp variable
// go through rest of character of temp varaiable
// add current character of the temp variable to the temp varaible
// return temp variable
// create a function for string less than three charcter with three parameter (string, dashDetect, colonChecker)
// create a list of conjunctions words
// create temp variable
// check if string id 'api'
//      if yes convert string to uppercase and add it to temp variable
//      return temp variable
// check if there is colon in previous word
//      if yes convert first charcater to uppercase and add it to temp variable
//      go through rest of character of the string and add it to the temp variable
//      return temp variable
// check if the current string is in the conjunctions words list array
//      if yes add current string to the temp variable
//      retrun temp
// convert first charcater of the current string to uppercase and add it to temp variable
// go through rest of character of the string and add it to the temp variable
// reutm temp
/// ///////////////////
// create variable for title string
// cheate temp string storage
// create boolean variable for dashDetect
// create variable for colon check
// go through each character of string provided by user
// check if current character is not space
//      if yes add convert current character to lower and add it to the temp string
//      also check for curent character check if its dash or not
//            if yes change boolean dashchecker to true
// else
// check if temp string length is more than three
//      if yes call strFourMore function with three argument tempString, dashDetect, colonChecker and asign the result of function to the variable
//      check if title string is empty
//            if yes converty first character of the return function to upper case and add it to the title string variable
//            go through rest of charcater of the return function add it to the title string variable
//            else add return function  to the title string variable
// add space to the title string
// get the last second character of the title case
// empty the temp string
// change the boolean value of dashdetect to false
// check if temp string length is more less then three
//      if yes call strThreeLess function with three argument tempString, dashDetect, colonChecker and asign the result of function to the variable
//      check if title string is empty
//            if yes converty first character of the return function to upper case and add it to the title string variable
//            go through rest of charcater of the return function add it to the title string variable
//            else add return function  to the title string variable
// add space to the title string
// get the last second character of the title case
// empty the temp string
// check if temp string length is more than three
//      if yes call strFourMore function with three argument tempString, dashDetect, colonChecker and asign the result of function to the variable
//      add return of the function the title string
// check if temp string length is less than three
//      if yes call strThreeLess function with three argument tempString, dashDetect, colonChecker and asign the result of function to the variable
//      add return of the function the title string
// return the titlecase string
