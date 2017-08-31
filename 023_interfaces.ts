//   name of attr follow by : and then datatype.  You can use interfaces to require datatypes by putting a ? it makes it an optional statement.
interface User {
	email : string;
	firstName? : string;
	lastName? : string;
}
// The interface is essentially creating its own data type User which can be called on in the function.  
function profile(user: User) : string {
	return `Welcome, ${user.email}`;
}

var realUser = {
	email: 'test@test.com',
	
};

console.log(profile(realUser));


