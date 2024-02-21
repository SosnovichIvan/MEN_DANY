import Floating from "./Floating.js";

class Fish extends Floating{
    typeAnim;
    color;
    constructor(){
        super(Floating)
        this.typeAnim="Рыба-клоун"
        this.color="Оранжевая"
        this.massa=0.5
        this.stature=10
        this.water="Морская"
        this.depth=2
        this.diving=3
        this.TypeWater="Морская"
        this.depthOfimmersion(this.diving,this.depth)
        this.habitat(this.water,this.TypeWater)
    }
    fact(){
       return "живет в кораллах"
    }
    info(){
        return console.log(`Животное вида:${this.typeAnim},весом ${this.massa}и ростом ${this.height},живет в ${this.TypeWater}(ой) воде и ${this.fact()}`)
    }
}

let Animal =new Fish()
Animal.info()