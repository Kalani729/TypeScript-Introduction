// Loosely connected Interface with Class

interface User {
	email: string;
	firstName? : string;
	lastName? : string;
}
//this. means that it is speaking specifically to the object that is being constructed.
class Admin {
	role : string;
	constructor(public email : string) {
		this.role = 'Admin';
	}
}

function profile(user: User) : string {
	return `Welcome, ${user.email}`;
}

var joe = new Admin('joe@example.com');
console.log(joe.role);


// Direct implementation
//  when you have an interface directly connected to a class the conventional is put a capital I infront.  
interface IPost {
	title: string;
	body: string;
}

//  'implements'  creates a direct connection to follow the contract created by IPost.   Anything that the constructor takes in has to contain a title and a body attribute.  
class Post implements IPost {
	title: string;
	body: string;

	constructor(post: IPost) {
		this.title = post.title;
		this.body = post.body;
	}

	printPost() {
		console.log(this.title);
		console.log(this.body);
	}
}
// It looks like a lot of duplicate code because we are being very explicit in what everything needs to do.
var post = new Post({ title: "My Great Title", body: "Some content"});

// Just to show the output in shorter form.  The class is there to place test on the data types.
console.log(post.title);
console.log(post.body);
post.printPost();










