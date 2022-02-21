class Circle {
  constructor (xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  move(xOffset, yOffset) {
    this.xPos = xOffset;
    this.yPos = yOffset
  }
  get surface  () {
    let surface = Math.pow(this.radius, 2) * Math.PI;
    return surface;
  }
}
  
let newCircle = new Circle(15, 15, 10);
console.log(newCircle);

newCircle.move(10, 5);
console.log(newCircle)
console.log(newCircle.surface);