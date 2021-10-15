const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (previousValue, currentValue) => previousValue + currentValue;
const product = (previousValue, currentValue) => previousValue * currentValue;
const balance = (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  } else {
    return previousValue - currentValue.amount;
  }
};

const composite = (previousValue, currentValue) => Object.assign(previousValue, currentValue);

console.log('sum', numbers.reduce(add));
console.log('Product', numbers.reduce(product));
console.log('balance', account.reduce(balance, 0));
console.log('composite', traits.reduce(composite));
