// All functions are closures.

// functions have access to any public variables in the outer scope. Closure can have nested functions.

// function nameFunction(name: string) : void {
// 	var n : string = name;

// 	function printName() {
// 		console.log(n);
// 	}

// 	printName();
// }

// nameFunction('Mark');

//  It encapsulate all the data in the outerscope.

// * * *

// The inner function maintain access to the outer scope even AFTER the values are returned!  Unlike Ruby, in JS it can see inside the function.  As if it was an instance variable.  nameAgain still has access to it because it was stored in a variable.

// function nameFunction(name: string) {
// 	var n : string = name;

// 	return function() {
// 		console.log(n);
// 	}
// }

// var nameAgain = nameFunction('Kalani');
// nameAgain();

// * * *
// Imagine a jumbotron at a baseball stadium that needs to be able to called anywhere. nowBatting will be the first batter.  nextBatter doesn't have to take any parameters.  nowBatting++ increments for the var. currentBatter returns nowBatting 

function lineup() {
	var nowBatting : number = 1;

	return {
		nextBatter() { nowBatting++ },
		currentBatter() { return nowBatting }
	}
}

let batters = lineup();

console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());

let pitchers = lineup();
console.log(pitchers.currentBatter());


// Acts alot like a class in Ruby, but maintains a direct connection to its scope without having to use loops. 