var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstname = theFirst;
        this.lastname = theLast;
    }
    return Customer;
}());
var newCustomer = new Customer("Harry", "Puttar");
console.log(newCustomer.firstname);
console.log(newCustomer.lastname);
