// messing around with get/set
class Thermostat {
    constructor(fahrenheit){
        this.fahrenheit=fahrenheit;
    }
    get temperature(){
        return (5/9) * (this.fahrenheit - 32);
    }
    set temperature(updatedTemperature){
        this.fahrenheit = updatedTemperature;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp);
console.log(thermos);

const myTemp = new Thermostat(50);
let newTemp = myTemp.temperature;
myTemp.temperature = 15;
newTemp = newTemp.tempeeprature;

console.log(myTemp);
console.log(newTemp);