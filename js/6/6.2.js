class Rectangle {
  constructor (topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides (otherRectangle) {
    if (this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width && 
      this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.length)
      return true;
      else return false;
  }
}

let firstRectangle = new Rectangle(5, 5, 6, 10);
let secondRectangle = new Rectangle(2, 2, 3, 2);

console.log(firstRectangle.collides(secondRectangle))

// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.