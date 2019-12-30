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

/* Common string methods */

let emailResult = email.lastIndexOf('m');
console.log('Last result is: ' + emailResult);

let emailSlice = email.slice(2, 5); // 2 starts from, 5 slice until
console.log(emailSlice);

let emailSubstr = email.substr(2, 5); // 2 starts from, 5 slice until
console.log(emailSubstr); // starts from, to position

email = email.replace('gmail', 'outlook');
console.log(email);

/* Numbers */

let likes = 10;
likes++;
console.log(likes);

likes += 10;
console.log(likes);

// Tip: NaN = Not a Number

/* Define default vars */
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
console.info(body);
