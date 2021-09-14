function ExampleConstructor() {

}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);
var newVariable = new ExampleConstructor();
console.log('newVariable:', newVariable);
var intanceOfVariable = (newVariable instanceof ExampleConstructor);
console.log('intanceOfVariable:', intanceOfVariable)
;
