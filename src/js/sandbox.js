// Import externals
import 'airbnb-browser-shims';

// Import internals
import './modules/helpers';

console.log("Let's go!");

/* Basics */
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

// Strings
let email = 'mathew.teague@gmail.com';
console.log(email);

let firstName = 'Mathew';
let lastName = 'Teague';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]);

// String Length
console.log(fullName.length);

// String Methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index is: ' + index);

/* Math operators
    + = plus
    - = takeaway
    * = times
    / = divide
    ** = power of
    % = remainder
*/
// Adding one shorthand ++
// Subtracting one shorthand --
// += adds on the value to the current
// -= subtracts the value from the current etc.
let likes = 10;

//likes++;
// likes--;
// likes+=;
// likes-=;
// likes*=;
// likes/=;

console.log(likes);

// Nan = not a number

/* Template Strings */
const title = 'The best of...';
const author = 'Mathew Teague';

let concatResult = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
let templateResult = `The blog called ${title} by ${author} has ${likes} likes.`;

// console.log(concatResult);
console.log(templateResult);

let htmlContent = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <p class="small">This blog has ${likes} likes.</p>
`;

const col = document.querySelector('.section .column');
col.innerHTML = htmlContent;

/* Boolean */
const booleanResult = email.includes('@');
console.log(booleanResult);

console.log(age === 30);

/* Comparisons
    == is loose comparison
    === strict comparison
*/

/* Loops */
let i = 5;

// for (i; i < 5; i++) {
// 	console.log('in for loop: ', i);
// }

// while (i < 5) {
// 	console.log('while loop number: ', i);
// 	i++;
// }

do {
	// can run the while loop just once even if not true.
	console.log('val of i is: ', i);
	i++;
} while (i < 5);

/* if statements */
const password = 'p@assword';

if (password.length >= 12 && password.includes('@')) {
	console.log('This is a great password.');
} else if (password.length >= 8) {
	console.log('Password is the right length.');
} else {
	console.error('Password is too short!');
}

/* Logical operators 
    && = and, if both are true
    || = or, only one condition has to be true
    ! = not true, do if is false
    !var = switch value to true/false
*/

/* Break & continue */

const scores = [ 50, 25, 0, 100, 20, 40 ];

for (let i = 0; i < scores.length; i++) {
	if (scores[i] === 0) {
		continue;
	}

	console.log('Your score is: ', scores[i]);

	if (scores[i] === 100) {
		console.log('You got to a 100!');
		break;
	}
}

/* Switch statements */

const grade = 'D';
// Checks with === and same type as created var.
switch (grade) {
	case 'A':
		console.log('Great stuff you got an A!');
		break;
	case 'B':
		console.log('Well done you got an B.');
		break;
	case 'C':
		console.log('Well done you got an C');
		break;
	case 'D':
		console.log('Ah you got a D. Better luck next time.');
		break;
	case 'E':
		console.log('Oh dear got a E. Better luck next time.');
		break;
	case 'F':
		console.log('What happened? You failed!');
		break;
	default:
		console.error('Not a vaild grade.');
}

/* Funtions */

// Function declaration
function greet() {
	console.log('Hello');
}
greet(); // Can call above function.

// Function Expression
const speak = function() {
	console.log('Good day');
};
speak(); // Cannot call before function

/* Define default vars */
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
console.info(body);
