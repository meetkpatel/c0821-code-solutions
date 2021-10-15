function filter(array, predicate) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const nameArr = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(filter(nameArr, currentword => currentword.startsWith('E')));
