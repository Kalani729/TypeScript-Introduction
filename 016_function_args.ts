// printAddress is taking 3 arguments. by using a ? on streetTwo, it makes the argument optional, but returns an undefined value. by using the conditional if statement it will only print if it is defined.  
// 							The state = 'AZ', represents a default value because of the = .  You cannot have a required value after an optional value.  Default arguments can be placed anywhere.  Optional values need to be at the very end.

// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
// 	console.log(street);
// 	if (streetTwo) {
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 540');
// printAddress('123 Any St', 'Suite 540', 'UT');

// A rest argument is called a splat in most other languages.  ... elipses make all the values for players an array.  THe rest argument converts everything you give it into  an array. 
function lineupCard(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');