// var x : number = 0;

// while (x < 10) {
// 	console.log(x);
// 	x++;
// }




let players : number[] = [3, 10, 4, 5, 1];

// You have to declare an iterator variable.  players is the actual array,  and player is the iterator.


// for in  -provides the index values as in for index [0, 1, 2, 3, 4, 5,]
console.log("For/In");
for (let player in players) {
	console.log(player);
}


// for of -provides the actual values [3, 10, 4, 5, 1]
console.log("For/Of");
for (let player of players) {
	console.log(player);
}


