import Animal from "./Animal.js"

export default class Flying extends Animal{
    height;
    maxHeight;
    speed;
    maxSpeed;


    constructor(speed, height,maxHeight,maxSpeed){
        super(Animal)
        this.speed=speed
        this.height=height
        this.maxHeight=maxHeight
        this.maxSpeed=maxSpeed
        this.rise()
        this.rapidity()
        }

        rise(height,maxHeight){
        if(height<maxHeight){
            return console.log(`Животное с ростом: ${this.height} и весом: ${this.massa}, имеет максимальную высоту подъема: ${this.maxHeight}км`)
        }
    }
    rapidity(speed,maxSpeed){
        if(speed!==maxSpeed){
            return console.log(`Животное хочет лететь со скоростью ${this.maxSpeed}`)
        }
    }
}


