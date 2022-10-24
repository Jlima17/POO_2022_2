var Calculator = /** @class */ (function () {
    function Calculator(operating1, operating2) {
        this.operating1 = operating1;
        this.operating2 = operating2;
    }
    Calculator.prototype.sum = function () {
        return this.operating1 + this.operating2;
    };
    return Calculator;
}());
var c1 = new Calculator(17, 10);
console.log(c1.sum());
//console.log(c1.subtraction());
