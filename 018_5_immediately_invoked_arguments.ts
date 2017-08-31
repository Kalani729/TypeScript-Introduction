// Function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
	return first + " " + last;
}

console.log(fullName('Mark', 'Albright'));

// Immediately invoked version
(function(first : string, last : string) {
	console.log(first + " " + last);	
})('Kalani', 'Albright');

// (function(ARGUMENTS) {
// 	console.log(ARGUMENT1 + " " + ARGUMENT2);	
// })('INPUT', 'INPUT');