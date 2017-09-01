// Loosely connected Interface with Class
//this. means that it is speaking specifically to the object that is being constructed.
var Admin = (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profile(user) {
    return "Welcome, " + user.email;
}
var joe = new Admin('joe@example.com');
console.log(joe.role);
//  'implements'  creates a direct connection to follow the contract created by IPost.   Anything that the constructor takes in has to contain a title and a body attribute.  
var Post = (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post = new Post({ title: "My Great Title", body: "Some content" });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=025_interface_classes.js.map