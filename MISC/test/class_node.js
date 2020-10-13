class Vegetable {
    constructor(name){
        this.name=name;
    }
}
class Taco {
    constructor(name){
        this.name=name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
const spicyTaco = new Taco('spicyTaco');
console.log(spicyTaco.name); 
