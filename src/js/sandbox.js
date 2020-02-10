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

// Arguments & Parameters
const speak2 = (name = 'Bob', day = 'morning') => {
	console.log(`good ${day} ${name}`);
};
speak2('Naruto', 'night');

// Returning Values
const calc = (radius) => 3.8989 * radius ** 2;
const area = calc(5);
console.log('area is: ' + area);

// Foreach Methods & Callbacks
const people = [ 'mark', 'henry', 'george', 'lenny', 'hugo', 'jekyll', 'hyde' ];

const ul = document.querySelector('.testlist');
let html = ``;

people.forEach((person) => {
	html += `<li class="testlist__item">${person.toLowerCase()}</li>`;
});
ul.innerHTML = html;

/* Objects */

let user = {
	name: 'Mat',
	age: 30,
	email: 'mathew.teageu@outlook.com',
	location: 'Birmingham',
	blogs: [
		{
			title: 'Hello',
			likes: 20
		},
		{
			title: 'World',
			likes: 40
		}
	],
	login: () => console.log('user logged in!'),
	logout: () => console.log('user logged out!'),
	logBlogs() {
		// Method instead of object.
		// if set the => the 'this' will be set to the global function not within the user object.
		this.blogs.forEach((blog) => console.log(`Blog title is: ${blog.title}. Number of likes are: ${blog.likes}`)); // this referes to the user object - user. e.g. this user.
	}
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user['name'] = 'Bob';
console.log(user['name']);

const key = 'location';
console.log(user[key]);

console.log(typeof user);

user.login();

user.logBlogs();

const number = 7.4;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

const random = Math.random();
console.log(Math.round(random * 100));

/* Define default vars */
const body = document.getElementsByTagName('body')[0];
const url = document.URL;
console.info(body);
console.info(url);

/* Dom Manipulation */
const para = document.querySelector('.content__bottom p'); // Selects only one p tag item.
const paras = document.querySelectorAll('.content__bottom p'); // Selects all p tag items. Isn't an array but can do things like an array.

console.log(para);
console.log(paras[1]);

paras.forEach((para) => console.log(para));

const contents = document.getElementsByClassName('content'); // Creates a HTML collection. // This is not the same as a node list such as querySelectorAll. Can't do forEach loops with collections.

const link = document.querySelector('.content__bottom a');
console.log(`Current link href: ${link.getAttribute('href')}`);
link.setAttribute('href', 'https://yewtreeweb.co.uk');
link.innerText = 'YewTreeWeb';
console.log(`New link href: ${link.getAttribute('href')}`);
link.setAttribute('style', 'color: orange;');

// Get style property
console.log(para.style.color); // Get's the color of the element.
para.style.fontSize = '20px'; // Add style instead of setAttribute('style', 'color: orange;');
para.style.color = ''; // Removes style.

const siteTitle = document.querySelector('h1');
console.log(siteTitle.classList);
siteTitle.classList.add('title--lg');
// siteTitle.classList.remove('title--lg');

/* Grabs all p tags and checks if they have the words success or error and then apply the correct class to them. */
const paraTags = document.querySelectorAll('.content__middle p');
paraTags.forEach((paraTag) => {
	try {
		// If use innerText all visible text within element is got. So no text within a sub element.
		// To get all text use textContent.
		const errorTag = paraTag.textContent.includes('error');
		const successTag = paraTag.textContent.includes('success');
		if (errorTag) {
			paraTag.classList.add('error');
		}
		if (successTag) {
			paraTag.classList.add('success');
		}
	} catch (e) {
		console.error(e);
		console.info(paraTag);
	}
});

// Manipluate children.
const article = document.querySelector('article');
console.log(article.children);

// Array.from turns collection into an array.
Array.from(article.children).forEach((child) => child.classList.add('article-element'));

// Get parent
const articleTitle = document.querySelector('article h2');
console.log(articleTitle.parentElement);

// Get siblings
console.log(articleTitle.nextElementSibling);
console.log(articleTitle.previousElementSibling);

/* Basic Events */

const list = document.querySelector('.todoList');
const listItems = document.querySelectorAll('.todoList li');

const button = document.querySelector('button.is-info');
const buttonRemove = document.querySelector('button.is-danger');

button.addEventListener('click', () => {
	const li = document.createElement('li');
	console.log('You clicked me.');
	button.classList.toggle('is-light');
	li.textContent = 'something new';
	list.append(li);
});

buttonRemove.addEventListener('click', () => {
	console.log('You removed an item.');
	console.log(list.children);
	Array.from(list.children).forEach((child) => {
		if (child.style.textDecoration.includes('line-through')) {
			child.remove();
		}
	});
});

// listItems.forEach((item) => {
// 	item.addEventListener('click', (el) => {
// 		console.log(el.target);
// 		el.stopPropagation(); // Stops the even bubbling up to the parent.
// 		if (item.style.textDecoration.includes('line-through')) {
// 			el.target.style.textDecoration = '';
// 		} else {
// 			el.target.style.textDecoration = 'line-through';
// 		}
// 	});
// });

list.addEventListener('click', (e) => {
	// Event delegation. Stops events being assigned to each element and will work with newly generated ones.
	console.log(e.target);
	e.stopPropagation(); // Stops the even bubbling up to the parent.
	if (e.target.tagName === 'LI') {
		if (e.target.style.textDecoration.includes('line-through')) {
			e.target.style.textDecoration = '';
		} else {
			e.target.style.textDecoration = 'line-through';
		}
	}
});

// Copy event
const copy = document.querySelector('.content__bottom h3');

copy.addEventListener('copy', () => {
	console.log('copied!');
});

// Mouse move
const move = document.querySelector('.hero-body');
const pos = document.createElement('p');
pos.textContent = '';
move.append(pos);
move.addEventListener('mousemove', (e) => {
	// console.log(e.offsetX, e.offsetY);
	pos.textContent = `X Pos - ${e.offsetX} Y Pos - ${e.offsetY}`;
});

// Wheel
const wheel = document.createElement('p');
wheel.textContent = '';
move.append(wheel);
document.addEventListener('wheel', (e) => {
	wheel.textContent = `Page X - ${e.pageX} Page Y - ${e.pageY}`;
});

/* Popup */
const pop = document.querySelector('.pop');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

pop.addEventListener('click', () => (popup.style.display = 'block'));
close.addEventListener('click', () => (popup.style.display = 'none'));
popup.addEventListener('click', () => (popup.style.display = 'none'));

/* Forms */
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.signup-form .feedback');
// const username = document.querySelector('#username');
const userPattern = /^[a-zA-Z]{6,12}$/; // Checks if username doesn't have any other characters before or after and is a lengeth between 6 and 12 characters.

// test the results:
// let patternResult = userPattern.test(formUser);
// let patternResult = userName.search(pattern);
// console.info(patternResult);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(username.value);
	console.log(form.username.value); // dot notation with forms
	const formUser = form.username.value;
	const patternResult = userPattern.test(formUser);
	if (patternResult) {
		// Feedback success
		feedback.textContent = 'Vaild username';
		feedback.classList.remove('error');
		feedback.classList.add('success');
	} else {
		// Feedback fail
		feedback.textContent = 'Invalid username';
		feedback.classList.remove('success');
		feedback.classList.add('error');
	}
});

// Live Feedback form
form.username.addEventListener('keyup', (e) => {
	console.log(e.target.value);
	const userValue = userPattern.test(e.target.value);
	if (userValue) {
		form.username.setAttribute('class', 'success');
	} else {
		form.username.setAttribute('class', 'error');
	}
});
