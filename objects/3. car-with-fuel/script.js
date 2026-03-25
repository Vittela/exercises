// Class Car with fuel

function Car(name, x, y, speed, fuel) {
  this.name = name
  this.coordinates = { x: x, y: y }
  this.speed = speed
  this.fuel = fuel
}

let celta = new Car("Celta", 0, 0, 1, 6);

console.log(celta)

Car.prototype.move = function (direction) {
  if (this.fuel < 1) {
    return ("Your fuel is over!")
  };

  if (direction === "right") {
    this.coordinates.x += this.speed;
  };
  if (direction === "left") {
    this.coordinates.x -= this.speed;
  }
  if (direction === "top") {
    this.coordinates.y += this.speed;
  }
  if (direction === "down") {
    this.coordinates.y -= this.speed;
  }

  console.log(`New ${this.name} coordinates: (${this.coordinates.x}, ${this.coordinates.y})`)
  
  return (`Fuel: ${this.fuel -= this.speed}L`)
}

Car.prototype.refuel = function (howMuchFuel) {
  this.fuel += howMuchFuel;

  return (`Your ${this.name} now have ${this.fuel}L of fuel`)
}
