const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
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

const evenNumbers = numbers.filter(currentNum => currentNum % 2 === 0);
const overFive = numbers.filter(currentNum => currentNum > 5);
const startWithE = names.filter(currentword => currentword.startsWith('E'));
const haveD = names.filter(currentword => currentword.includes('D') || currentword.includes('d'));

console.log('evenNumbers', evenNumbers);
console.log('overFive', overFive);
console.log('startWithE', startWithE);
console.log('haveD', haveD);
