var bool = true;
var name = 'Jack';
var num = 1;

// IF STATMENT
// Multiline statement
// if (!num) {
//   // do something
//   console.log('The condition is true')
// }
//
// // Single line statement
// if (!num) console.log ('the condition is true');

//  IF/ELSE STATEMENT
// if (bool) {
//   // Do something if true
//   console.log('condition is truthy');
// } else {
//   // Do something if false
//   console.log('condition is falsey');
// }

// IF/ELSE IF STATEMENT
// if (num == '1') {
//   // Do something if first condition is truthy
//   console.log('num == 1');
// } else if (num === 1) {
//   // Do something if the condition is a different value
//   console.log('num === 1');
// } else {
//   // Do something if no condition is met
//   console.log('Num is not equal to any of the conditions');
// }

// Logical Operators
// OR || - only one statement needs to be true for the code to run
// if (num == '1' || bool === false) {
//   // Do something if first condition is truthy
//   console.log('Condition 1');
// } else if (num === 1 && bool === true) {
//   // Do something if the condition is a different value
//   console.log('Condition 2');
// } else {
//   // Do something if no condition is met
//   console.log('No condition met');
// }

// SWITCH STATEMENT
switch (name) {
  case 'Tim':
    console.log('Name is Tim');
    break;
  case 'Kyle':
    console.log('Name is Kyle');
    break;
  case 'Bill':
    console.log('Name is Bill');
    break;
  case 'Matt':
    console.log('Name is Matt');
    break;
  default:
    console.log('No match');
}
