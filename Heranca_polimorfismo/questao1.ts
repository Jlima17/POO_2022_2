class Vehicle{
    private p: string;
    private a: number;

    constructor(license_plate: string, year: number){
        this.p = license_plate;
        this.a = year;
    }
}

class Car extends Vehicle{
    private m: string;

    constructor(license_plate: string, year: number, model: string){
        super(license_plate, year);
        this.m = model;
    }
}

class ElectricCar extends Car{
    private b: number;

    constructor(license_plate: string, year: number, model: string, batteryAutonomy: number){
        super(license_plate, year, model);
        this.b = batteryAutonomy;
    }
}