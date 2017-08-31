// Immediately invoked functions - processes without having to be called separately
var names = ['Mark', 'Chris', 'Kalani'];
var counter = 0;
// Immediately invoked function.  Everything inside outer {} is  the invoked. The function is also enclosed within () the second set () is the arugments it will take.
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=018_immediately_invoked_functions.js.map