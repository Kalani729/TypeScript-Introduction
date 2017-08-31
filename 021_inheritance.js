// An Abstract class is one that will be instanciated but never called upon itself.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
// extends - Inherit all of the data from the Report class. { super(name); } Super is calling the parent class think of it as the parent.  Super()  It says go up there to the parent class  with all of the arguments if it has empty paranthesis.  A simple test to make sure you are usingit correctly is to ask is this subclass a ore specific type of the parent. super by itself is all argument, super() empty is no arguments.  The child classes are more specific. C
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ", " + this.total;
    };
    return Invoice;
}(Report));
var BillOfLading = (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printBol = function () {
        return this.name + ", " + this.city + ", " + this.state;
    };
    return BillOfLading;
}(Report));
var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Yahoo', 'Scottsdale', 'AZ');
console.log(invoice.printInvoice());
console.log(bol.printBol());
//# sourceMappingURL=021_inheritance.js.map