var Hour = /** @class */ (function () {
    function Hour(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
    }
    Hour.prototype.getHour = function () {
        return this.h;
    };
    Hour.prototype.getMinutes = function () {
        return this.m;
    };
    Hour.prototype.getSeconds = function () {
        return this.s;
    };
    Hour.prototype.getTimes = function () {
        return "".concat(this.h, " horas, ").concat(this.m, " minutos e ").concat(this.s, " segundos");
    };
    return Hour;
}());
var h1 = new Hour(17, 10, 18);
console.log(h1.getHour());
console.log(h1.getMinutes());
console.log(h1.getSeconds());
console.log(h1.getTimes());
