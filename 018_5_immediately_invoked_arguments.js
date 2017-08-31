// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Mark', 'Albright'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Kalani', 'Albright');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map