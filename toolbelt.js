/*

var toolbelt = {};
	toolbelt.forEach = function(collection, callback){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i)
		}
	};
	toolbelt.map = function(collection, callack){
		var results = [];
		toolbelt.loop(collection, function(element){
			results.push(callback(element));
		})
		return results;
	};
	toolbelt.filter = function(collection, callback){
		var results = [];
		toolbelt.loop(collection, function(element){
			if(callback(element)){
				results.push(element);
			}
		})
		return results;
	};
	toolbelt.reduce = function(collection, callback, previousVal){
		previousVal = previousVal || null
		toolbelt.loop(collection, function(element){
			previousVal = callback(previousVal, element);
		})
		return previousVal;
	};



1. add a method to the toolbelt object (defined above for you) that takes in an array, and passes each element and index of the array into a callback function.

Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
This function will not return anything. All it is doing is looping through the input array.

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)

b) What does the callback to this function return? (a string, an object, a boolean, etc.)
The callback in this function will return whatever the function does to the element being passed within it.



2. add a method to the toolbelt object that takes in an array, passes each element and index of the array into a callback function, and returns an array with the results of each call to the callback function.

Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
This function will return an array of the exact length of the input array.

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)

b) What does the callback to this function return? (a string, an object, a boolean, etc.)
The callback in this function will return whatever the function does to the element being passed within it.



3. add a method to the toolbelt object that takes in an array, and passes each element and index of the array into a callback function. Return an array of just the elements for which the callback returned true.

Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
This function will return an array with the length of the amount of elements for which the callback returned true;

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)

b) What does the callback to this function return? (a string, an object, a boolean, etc.)
The callback in this function will return a boolean value of either true or false.



4. add a method to the toolbelt object that takes in an array and returns an accumulation of the elements in the array. The method takes in three parameters: the array, the callback, and whatever you want to initialize the accumulator at. The function should loop through the array, and for each element, redefine the accumulator to whatever the callback returns. You should pass into the callback the accumulator itself and the element. The function should return the accumulator.

Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
This function should return any data type.

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)

b) What does the callback to this function return? (a string, an object, a boolean, etc.)
The callback in this function will return the accumulation of the values being passed within it.

*/


