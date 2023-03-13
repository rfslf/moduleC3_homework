class Device {
  constructor(name, power){
    this.name = name;
    this.state = false;
    this.power = power;
  }
  switchOn() {
    if (!(this.state)) {
      this.state = true;
      console.log(this.name, 'in on');
    } else {
      console.log(this.name, 'already on');
    }
  }
  switchOff() {
    if (this.state) {
      this.state = false;
      console.log(this.name, 'in off');
    } else {
      console.log(this.name, 'already off');
    } 
  }
  currentPower() {
    if (this.state) {
      return (this.power);
    } else {
      return 0;
    }
  }
}

class kitchenDevice extends Device {
  constructor(name, power, color){
    super(name, power);
    this.color = color;
  }
}

class mediaDevice extends Device {
  constructor(name, power, weight){
    super(name, power);
    this.weight = weight;
  }
}

const kettle = new kitchenDevice('kettle', 900, 'red');
kettle.switchOn();
const ps5 = new mediaDevice('ps5', 500, 5);
ps5.switchOn();
console.log('Current common power(Watt):', ps5.currentPower() + kettle.currentPower());
