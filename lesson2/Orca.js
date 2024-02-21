import Floating from "./Floating.js";

class Orca extends Floating{
    typeAnim;
    color;
    constructor(){
        super(Floating)
        this.typeAnim="Косатка"
        this.color="Черная"
        this.massa=10
        this.stature=180
        this.water="Морская"
        this.depth=5
        this.diving=10
        this.TypeWater="Морская"
        this.depthOfimmersion(this.diving,this.depth)
        this.habitat(this.water,this.TypeWater)
    }
    fact(){
       return "ест морских котиков"
    }
    info(){
        return console.log(`Животное вида:${this.typeAnim},весом ${this.massa}и ростом ${this.height},живет в ${this.TypeWater}(ой) воде и ${this.fact()}`)
    }
}

let Animal =new Orca()
Animal.info()