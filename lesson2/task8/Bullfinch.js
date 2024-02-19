import Flying from "./Flying.js";

class Bullfinch extends Flying{
    typeAnimals;
    color;
    constructor(){
        super(Flying)
        this.typeAnimals="Снегирь"
        this.color="Бело-Черный"
        this.massa=3
        this.stature=20
        this.maxHeight=1
        this.height=0.2
        this.maxSpeed=1
        this.speed=1
        this.rise(this.maxHeight,this.height)
        this.rapidity(this.speed,this.maxSpeed)
    }
    fact(){
       return "Прилетает в начале зимы"
    }
    info(){
        return console.log(`Животное вида:${this.typeAnimals},весом ${this.massa}и ростом ${this.height},летает со скоростью ${this.maxSpeed}м/с  ${this.fact()}`)
    }
}

let Animal =new Bullfinch()
Animal.info()
