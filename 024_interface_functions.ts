interface InvoiceFunc {
	(name : string, total : number) : void;
}

// An interface is a contract and the arguments don't need the same name by but they do need to be defined
let myInvoice : InvoiceFunc;
myInvoice = function(n, t) {
	console.log(n);
	console.log(t);
}

myInvoice('Google', 500);