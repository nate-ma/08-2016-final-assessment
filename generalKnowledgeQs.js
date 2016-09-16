/* GENERAL JS KNOWLEDGE QUESTIONS:

// ARRAYS
1. How do you access the third item in an array?
Elements in an array are indexed starting at 0, 1, 2, 3, etc.
You would access the third item or third element in an array by returning array[2].

2. How do you loop through an array?
You would loop through an array with a while or for-i loop.

// OBJECTS
1. What are the two ways you can access a particular key in an object? When do you use which and why?
You could access a key in an object through.

2. How do you loop through an object?
You would loop through an object with a for-in loop.

3. What is a method?
Methods are functions that may be used on objects.


// MISC
1. What operator would you use in a conditional to represent 'OR' and what operator would you use to represent 'AND'?
The || conditional operator would represent 'OR'.
The ** conditional operator would reprsent 'AND'.

2. What is the difference between '=' and '==='?
'=' is the assignment operator.
'===' is the 'EQUALS' operator.

3. What are the data types in JavaScript?
The data types in JavaScript are booleans, strings, numbers, objects and undefined.

4. a) What is scope?
Scope encompasses the accessibility of different variables depending on where they are defined.

b) What happens if you try to call a variable that's defined in the parent scope from within the child scope?
If you call a variable defined in the parent scope within its child scope, you would be able to access it.

c) What happens if you try to call a variable that's defined in the child scope within the parent scope?
If you call a variable defined in the child scope within its parent scope, you would not be able to access it; it will be undefined.

// PSEUDOCODE
WITHOUT writing actual code, please write your pseudocode to demonstrate the steps you would take to solve this problem:

Prompt 1: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if EVERY number in the array is even, and false otherwise.
// Create a variable and declare it as a function which takes in an array of numbers.
	// Define a variable 'state' within the function and set its value to true .
	// Loop through the array.
		// Use a conditional statement to check if the numbers are not even.
			// If a number is not even, overwrite 'state's' value to be false.
	// Return the value of 'state'.

In this example, an array will be looped through. If no odd numbers exist, the value of state will remain true and thus all numbers are even.
Meanwhile, if an odd number(s) exists, the value of state will be overwritten to be false. Any even numbers that are subsequently looped through will have no effect on the value of state.

Prompt 2: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if ANY number in the array is even, and false otherwise.
// Create a variable and declare it as a function which takes in an array of numbers
	// Create a variable 'state' within the function and set its value to false
	// Loop through the array
		// Use a conditional statement to check if any numbers are even.
			// If a number is even, overwrite 'state's' value to be true.
	// Return the value of 'state'.

This example works simliar to prompt. Except if an even number exists the value of state will be overwritten to be true.
Any odd numbers that may be looped through will have no effect on the defined value of state.	


