// An Abstract class is one that will be instanciated but never called upon itself.

class Report {
	companyProfile : string;

	constructor(public name : string) {
		this.companyProfile = name;
	}
}

// extends - Inherit all of the data from the Report class. { super(name); } Super is calling the parent class think of it as the parent.  Super()  It says go up there to the parent class  with all of the arguments if it has empty paranthesis.  A simple test to make sure you are usingit correctly is to ask is this subclass a ore specific type of the parent. super by itself is all argument, super() empty is no arguments.  The child classes are more specific. C

class Invoice extends Report {
  constructor(public name : string, public total : number) { super(name); }

  printInvoice() {
  	return this.name + ", " + this.total;
  } 
}

class BillOfLading extends Report {
	constructor(public name : string, public city : string, public state : string) { super(name); }

	printBol() {
  	return this.name + ", " + this.city + ", " + this.state;
  } 
}

var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Yahoo', 'Scottsdale', 'AZ');

console.log(invoice.printInvoice());
console.log(bol.printBol());