class Hour{
    private h: number;
    private m: number;
    private s: number;

    constructor(h: number, m:number, s:number){
        this.h = h;
        this.m = m;
        this.s = s;
    }

    getHour():number{
        return this.h;
    }

    getMinutes(): number{
        return this.m;
    }

    getSeconds(): number{
        return this.s;
    }

    getTimes(): string{
        return `${this.h} horas, ${this.m} minutos e ${this.s} segundos`;
    }
}

let h1: Hour = new Hour(17, 10, 18);

    console.log(h1.getHour());
    console.log(h1.getMinutes());
    console.log(h1.getSeconds());
    console.log(h1.getTimes());
