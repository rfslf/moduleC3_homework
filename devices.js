function Device(name, power){
  this.name = name;
  this.state = false;
  this.power = power;
  this.switchOn = function(){
    if (!(this.state)) {
      this.state = true;
      console.log(this.name, 'in on');
    } else {
      console.log(this.name, 'already on');
    }
  },
  this.switchOff = function(){
    if (this.state) {
      this.state = false;
      console.log(this.name, 'in off');
    } else {
      console.log(this.name, 'already off');
    } 
  }
  this.currentPower = function(){
    if (this.state) {
      return (this.power);
    } else {
      return 0;
    }
  }
}

function kitchenDevice(name, power, color){
  this.name = name;
  this.color = color;
  this.power = power;
}

kitchenDevice.prototype = new Device();

function mediaDevice(name, power, weight){
  this.name = name;
  this.weight = weight;
  this.power = power;
}

mediaDevice.prototype = new Device();


const kettle = new kitchenDevice('kettle', 900, 'red');
kettle.switchOn();
const ps5 = new mediaDevice('ps5', 500, 5);
ps5.switchOn();
console.log('Current common power(Watt):', ps5.currentPower() + kettle.currentPower());
