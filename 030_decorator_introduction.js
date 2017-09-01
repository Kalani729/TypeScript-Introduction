var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Post = (function () {
    function Post() {
    }
    Post.prototype.someFunction = function () { };
    __decorate([
        processTwo(),
        processOne(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "someFunction", null);
    return Post;
}());
// A decorator has to return a function. target, propertyKey, descriptor are all used to create a decorator.  When you create a funciton if you want it to work like a decorator you have to follow the rules.  the @ symbol applies the functions.  Called at runtime not at object instanciation.  They are very popular when building permission structures. The functions are ran right away, however it bounced back in reverse.  
function processOne() {
    console.log("processOne has run");
    return function (target, propertyKey, descriptor) {
        console.log("processOne has been called");
    };
}
function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey, descriptor) {
        console.log("processTwo has been called");
    };
}
// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called 
//# sourceMappingURL=030_decorator_introduction.js.map