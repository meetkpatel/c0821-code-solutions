const takeAChance = require('./take-a-chance');
const ret = takeAChance('Meet');

ret.then(value => {
  console.log(value);
});

ret.catch(error => {
  console.error(error.message);
});
