class Calculator{
    private operating1: number;
    private operating2: number;
    
    constructor(operating1: number, operating2: number){
        this.operating1 = operating1;
        this.operating2 = operating2;
    }

    sum(): number{
        return this.operating1 + this.operating2;
    }
    
    /*subtraction(): number{
        return this.operating1 - this.operating2;
    }*/
}

let c1: Calculator = new Calculator(17, 10);

console.log(c1.sum());
//console.log(c1.subtraction());