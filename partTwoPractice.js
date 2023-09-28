/** ARROW FUNCTIONS **/

/*
	You learned to create functions like this:

	function printVariantName(firstName, lastName) {
		return `Variant: ${firstName} ${lastName}`;
	}

	And this:

	let tortureLoki = function(ladySif) {
		tortureLoki(ladySif);
	};

	But there's a newer syntax, called an "arrow function", or sometimes "fat arrow function". Generally, the preference is to use "const" instead of "let" to declare such functions so that it can't accidentally be overwritten. Here's the basic syntax:

	const functionName = (arg1, arg2) => { 
		console.log("arg1");
		console.log("arg2"); 
		return arg1 + arg2;
		// or whatever
	};
*/

// EXAMPLE: This takes one argument, changes its value, and returns it.
const pruneVariant = (variantName) => {
	variantName = null;
	return variantName;
};

console.log(pruneVariant("Loki"));

// EXAMPLE: With only one argument you can actually leave off the parentheses for an even cleaner read.
const timeToEscapeAlioth = distance => {
	return 60 * distance / 12; // minutes
}

console.log(timeToEscapeAlioth(2));

// EXAMPLE: But if you have more than one argument to pass in, you must use parentheses.
const resetTimeline = (location, year, delay) => {
	console.log("Resetting timeline... (wait for it)");
	setTimeout(() => {
		console.log("This is probably the last thing printed...");
		console.log(`${location} in ${year} has been reset.`);
	}, delay); // delay in milliseconds
};

resetTimeline("Pompeii", "79 A.D.", 1500);

// EXAMPLE: You also have to use parentheses if you have no arguments to pass in.
const printSaying = () => {
	console.log("For all time.");
	console.log("Always.");
}

printSaying();


// EXAMPLE: It gets better! If you have only a single line of code inside your function, you can leave the curly braces and "return" off too. Clean and concise.
actors = {
	loki: "Tom Hiddleston",
	sylvie: "Sophia Di Marino",
	mobius: "Owen Wilson",
	hunterB15: "Wunmi Mosaku",
	throg: "Chris Hemsworth",
	classicLoki: "Richard E. Grant",
	presidentLoki: "Tom Hiddleston",
}

const lookupActor = character => actors[character];

console.log(lookupActor("throg"));
console.log(lookupActor("mobius"));

// TODO: TRY IT! Write an arrow function that takes in a number and returns its square. (Ex: 5 squared is 25)

const squaredNum = (num) => {
    return num **2
}
console.log("Squared Number: ");
console.log(squaredNum(5));
console.log(squaredNum(13));

console.log(" ");


// TODO: TRY IT! Write an arrow function that takes in two numbers and returns their sum.


const sumNum = (a, b) => a + b;

console.log(sumNum(1, 2));
console.log(sumNum(3, 3));

// TODO: TRY IT! Write an arrow function that takes no argument but prints your favorite quote.

const printQuote = () => 
console.log("Thinking doesn't overcome fear, action does.");

printQuote();


// TODO: TRY IT! Write a concise arrow function that takes in a string and returns the string in all caps. Don't use parentheses or curly braces.

const capitilizedString = (str) => {
    return str.toUpperCase();
}

const capString = str => str.toUpperCase();

console.log(capitilizedString("yellow"));
console.log(capString("blue"));


/** SPECIAL ARRAY METHODS **/

// There are some special functions that you will find yourself using frequently to simplify certain looping procedures. The most common are .forEach(), .map(), .reduce(), and .filter(). Each make use of arrow functions.
let numArray = [3, 6, 2, 8, 5, 4]

// .forEach() is a concise way to conduct a for loop. In the past, you've done the following:
for (let i=0; i < numArray.length; i++) {
	console.log(`${numArray[i]} o'clock`);
}

// With .forEach() you can get the same result like this:
numArray.forEach(n => console.log(`${n} o'clock`));

// .map() will produce a new array with new data. You may be used to doing this:
function getProducts(arr) {
	let newArray = [];
	for (let i=0; i < arr.length; i++) {
		newArray.push(5 * arr[i]);
	}
	return newArray;
}

console.log(getProducts(numArray));

// Now with .map() you can do it in a single line, using an arrow function inside an arrow function to make it reusable:
const mapProducts = arr => arr.map(num => 5 * num);

console.log(mapProducts(numArray)); 

// .reduce() allows you to go through an array and gather each element one at a time. It is commonly used as an accumulator. For example, ordinarily you'd get the sum of all the numbers in an array like this:
function getSum(arr) {
	let sum = 0;
	for (let i=0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(getSum(numArray));

// But with .reduce() you can do this instead (note in the arguments the accumulator variable goes first and the element second):
const reduceNums = arr => arr.reduce((sum, num) => sum + num);

console.log(reduceNums(numArray));

// If you aren't starting at zero for your accumulator, you can specify the starting value at the very end like this:
const addFromTen = arr => arr.reduce((sum, num) => sum + num, 10);

console.log(addFromTen(numArray));

// .filter() will go through an array and return a new array that holds only the elements that match your criteria (a boolean expression). So instead of this:
function getEvenNums(arr) {
	let newArray = [];
	for (let i=0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

console.log(getEvenNums(numArray));

// With .filter() you can do this:
const filterEvenNums = arr => arr.filter(num => num % 2 === 0);

console.log(filterEvenNums(numArray));

// TRY IT! Using the array below, practice using .forEach(), .map(), .reduce(), and .filter()
let words = ["The", "Time", "Variance", "Authority:", "For", "all", "time.", "Always."];



// TODO: Use .forEach() to print each word in the array above to the console, one at a time.

words.forEach( word => console.log(word));


// TODO: Write a function that uses .map() to produce a new array holding the length of each word, and print the result to the console.

const mapWords = arr => arr.map(word => word.length);

console.log(mapWords(words));


// TODO: Write a function that uses .reduce() to produce a single sentence from all the words from the array above.  You'll need to specify a starting value. Then print the result.

// const reduceWords = arr => arr.reduce((sentence, word => sentence.concat(word)), 0);

const altJoin = (arr) => arr.reduce((sentence, word) => sentence + word + " ", "");


// console.log(reduceNums(words));
console.log(altJoin(words));


// TODO: Write a function that uses .filter() to produce a new array with only words that have more than three characters, then print the result.

const filterThreeLetterWords = arr => arr.filter(word => word.length >= 3);

console.log(filterThreeLetterWords(words));

// BONUS - You can chain these methods together and take care of multiple operations at once. For example, let's take an array of integers and produce the sum of only the odd numbers.
let numArray2 = [21, 44, 93, 62, 141, 33, 296];

const addOddsOnly = arr => arr.filter(num => num % 2 !== 0).reduce((sum, oddNum) => sum + oddNum);

console.log(addOddsOnly(numArray2));

// TODO: Try it! Write a function that produces an array of numbers that have been multiplied by five, but only if they are divisible by three.


const multiplyByFive = arr => arr.filter(num => num % 3 !== 0).map(n => 5 * n);

console.log(multiplyByFive(numArray2));


/*
	A couple of things to keep in mind about arrow functions:

		- When you store a function in a variable, you need to use a semicolon at the end.

		- Any function stored in a variable must come ahead of any code where you need to call it. (Unlike traditional functions which can be at the bottom but JavaScript can use them anywhere above that.)
*/