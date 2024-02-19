import Animal from "./Animal.js"

export default class Floating extends Animal{
    water;
    depth;
    diving;
    TypeWater;


    constructor(water, depth,diving,TypeWater){
        super(Animal)
        this.water=water
        this.depth=depth
        this.diving=diving
        this.TypeWater=TypeWater
        this.depthOfimmersion()
        this.habitat()
        }

        depthOfimmersion(diving,depth){
        if(diving<depth){
            return console.log(`Животное с ростом: ${this.height} и весом: ${this.massa}, имеет максимальную глубину погружения: ${this.depth}км`)
        }
    }
    habitat(water,TypeWater){
        if(TypeWater!==water){
            return console.log(`Животное обитает в ${this.TypeWater}(ой) воде`)
        }
    }
}


