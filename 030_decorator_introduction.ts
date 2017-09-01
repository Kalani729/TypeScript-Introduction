class Post {
  @processOne()
  @processTwo()
  someFunction() {}
}

// A decorator has to return a function. target, propertyKey, descriptor are all used to create a decorator.  When you create a funciton if you want it to work like a decorator you have to follow the rules.  the @ symbol applies the functions.  Called at runtime not at object instanciation.  They are very popular when building permission structures. The functions are ran right away, however it bounced back in reverse.  

function processOne() {
  console.log("processOne has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processOne has been called");
  }
}

function processTwo() {
  console.log("processTwo has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processTwo has been called");
  }
}


// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called