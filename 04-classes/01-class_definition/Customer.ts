class Customer{
    
    firstname: String;
    lastname: String;

    constructor(theFirst: string, theLast: string){
        this.firstname = theFirst;
        this.lastname = theLast;
    }

}

let newCustomer = new Customer("Harry", "Puttar");

console.log(newCustomer.firstname);
console.log(newCustomer.lastname);