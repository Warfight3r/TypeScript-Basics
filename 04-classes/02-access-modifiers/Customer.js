var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstname = theFirst;
        this._lastname = theLast;
    }
    Object.defineProperty(Customer.prototype, "FirstName", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
            ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "LastName", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
            ;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var newCustomer = new Customer("Henry", "Puttar");
console.log(newCustomer.FirstName);
console.log(newCustomer.LastName);
