// Function declaration - Allows Hoisting,  when fullname is invoked js goes and looks for the fullname function declaration.  Are ran at initialization
function fullName(first, last) {
    return first + " " + last;
}
// Function expression -  These must be defined before they can be called.  Allows it to be run later down the road.
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
// combination of first two.  
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Mark', 'Albright'));
console.log(otherFullName('Mark', 'Albright'));
console.log(thirdFullName('Mark', 'Albright'));
//Why in the world would you need to do this?  The difference is this
//The latter allows asynchronous development where not everything has to be loaded at the same time.  You can have function expressions just chilling out until it is needed. 
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map