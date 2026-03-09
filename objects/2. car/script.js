// Class car

function Car(x, y, speed ) {
  this.coordinates = { x: x, y: y }
  this.speed = speed
}

let celta = new Car(0, 0, 1);

console.log("My Celta:", celta)

Car.prototype.move = function (direction) {
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

  console.log(`New ${this} coordinates: (${this.coordinates.x}, ${this.coordinates.y})`)
}
