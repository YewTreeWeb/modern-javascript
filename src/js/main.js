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

/* Define default vars */
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
console.info(body);
