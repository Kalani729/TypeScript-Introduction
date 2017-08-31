class Invoice {
	companyProfile : string;

	constructor(public name, public city, public state) {
		this.companyProfile = name + ", " + city + ", " + state;
	}
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'State');


console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);


// companyProfile is the declared variable. const is exactly like the Intializer method .New in Ruby.  If you use the 'public' keyword it allows you to come-in see and change values.  
