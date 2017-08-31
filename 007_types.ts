// Boolean -
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Mark Albright";

// Array -give data type in front of brackets
var ages : number[] = [33, 28, 11];

// Tuple -allows you to have a collection with different variable types when you already know what the data types are going to be by assigning them in the []
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

// Enum 
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any -Can be very error prone allows any type of data to be put in array
var apiData : any[] = [123, 'Mark', false];

// Void-Use anytime you perform an action but don't want a value returned 
function printOut(msg: string) : void {
  console.log(msg);
}
