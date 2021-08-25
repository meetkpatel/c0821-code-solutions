var x = 2; var y = 5; var z = 7;
console.log('MaximumValue:', Math.max(x, y, z));

var heroes = ['IronMan', 'Thor', 'Hulk', 'CaptainMarvel'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie'
  },
  {
    title: 'Think Like A Monk',
    author: 'Jay Shetty'
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Meet Patel';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
