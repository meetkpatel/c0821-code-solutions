var books = [{
  isbn: '123',
  title: 'Rich Dad Poor Dad',
  authoe: 'Robert Kiyosaki'
},
{
  isbn: '456',
  title: 'Think And Grow Rick',
  authoe: 'Napoleon Hill'
},
{
  isbn: '789',
  title: 'How to Win Friends and Influence People',
  authoe: 'Dale Carnegie'
}];

console.log('Books:', books);
console.log('Type of Books:', typeof books);

var jsonBook = JSON.stringify(books);
console.log('Books JsonStringify:', jsonBook);
console.log('Type of jsonBook:', typeof jsonBook);

var studentInfo = '[{"numberId":"111","sringName":"abc"}]';
console.log('studentInfo:', studentInfo);
console.log('Type of studentInfo:', typeof studentInfo);

var jsonParse = JSON.parse(studentInfo);
console.log('jsonParse:', jsonParse);
console.log('Type of jsonParse:', typeof jsonParse);
