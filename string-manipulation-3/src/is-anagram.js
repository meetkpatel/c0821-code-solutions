/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var arrOne = [];
  var arrTwo = [];
  for (var arrOneKey in firstString) {
    if (firstString[arrOneKey] !== ' ') {
      arrOne.push(firstString[arrOneKey]);
    }
  }

  for (var arrTwoKey in secondString) {
    if (secondString[arrTwoKey] !== ' ') { arrTwo.push(secondString[arrTwoKey]); }
  }

  for (var arrOneCheck in arrOne) {
    for (var arrTwoCheck in arrTwo) {
      if (arrOne[arrOneCheck] === arrTwo[arrTwoCheck]) {
        arrOne[arrOneCheck] = '*';
        arrTwo[arrTwoCheck] = '*';
        break;
      }
    }
  }
  for (var arrOneCheckLast in arrOne) {
    for (var arrTwoCheckLast in arrTwo) {
      if (arrOne[arrOneCheckLast] !== arrTwo[arrTwoCheckLast]) {
        return false;
      }
    }
  }
  return true;
}
