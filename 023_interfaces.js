// The interface is essentially creating its own data type User which can be called on in the function.  
function profile(user) {
    return "Welcome, " + user.email;
}
var realUser = {
    email: 'test@test.com'
};
console.log(profile(realUser));
//# sourceMappingURL=023_interfaces.js.map