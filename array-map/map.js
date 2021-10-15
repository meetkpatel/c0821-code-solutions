function map(array, transform) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(transform(array[i]));
  }
  return (newArr);
}

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const newLanguages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
console.log(map(newLanguages, currentWord => currentWord.toUpperCase()));
