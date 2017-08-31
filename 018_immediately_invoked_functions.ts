// Immediately invoked functions - processes without having to be called separately
var names : string[] = ['Mark', 'Chris', 'Kalani'];
var counter : number = 0;

// Immediately invoked function.  Everything inside outer {} is  the invoked. The function is also enclosed within () the second set () is the arugments it will take.
(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);