export class Customer{
    
    constructor( private _firstname: string, private _lastname: string){
    }
    get FirstName(): string{
        return this._firstname;
    }
    set FirstName(value: string){
        this._firstname = value;;
    }
    get LastName(): string{
        return this._lastname;
    }
    set LastName(value: string){
        this._lastname = value;;
    }
}