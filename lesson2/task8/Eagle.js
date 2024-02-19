import Flying from "./Flying.js";

class Eagle extends Flying{
    typeAnimals;
    color;
    constructor(){
        super(Flying)
        this.typeAnimals="Орел"
        this.color="Коричневый"
        this.massa=2
        this.stature=50
        this.maxHeight=2
        this.height=1
        this.maxSpeed=10
        this.speed=10
        this.rise(this.maxHeight,this.height)
        this.rapidity(this.speed,this.maxSpeed)
    }
    fact(){
       return "Их средний размах крыльев составляет 1,8-2,3 метра"
    }
    info(){
        return console.log(`Животное вида:${this.typeAnimals},весом ${this.massa}и ростом ${this.height},летает со скоростью ${this.maxSpeed}м/с  ${this.fact()}`)
    }
}

let Animal =new Eagle()
Animal.info()