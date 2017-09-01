// Callbacks are just methods ther aren't that special.  Mimicking a database query call.  The setTimeout is just there to mimic a database query behavior.
var dbQuery = function() : void {
	setTimeout(() => {
		console.log('Query results');
	}, 3000);
}
// Mimicing loading a page.   When we have a method that actually takes a method it is called a higher order function.   This is a function that takes another function as its argument.  Callbacks are used to allow other data heavy processes to load at a different rate than the ligther data loads.  Allowing everything to load at their own speed.  It's multi tasking!!!  JS does things asynchronously be default.
function loadPage(q : () => void) {
	console.log("Header");
	q();
	console.log("Sidebar");
	console.log("Footer");
}

loadPage(dbQuery);


// dbQuery is considered a callabck, usually callback functions are anonymous methods.  