class Rectangle {
  constructor (topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides (otherRectangle) {
    if (otherRectangle.topLeftXPos + otherRectangle.width < this.topLeftXPos || otherRectangle.topLeftXPos > this.topLeftXPos + this.width)
      return false;
        else if (otherRectangle.topLeftYPos + otherRectangle.length < this.topLeftYPos || otherRectangle.topLeftYPos > this.topLeftYPos + this.length)
          return false;
            else return true;
  
  }
}

let firstRectangle = new Rectangle(2, 9, 5, 14);
let secondRectangle = new Rectangle(4, 12, 12, 8);

console.log(firstRectangle.collides(secondRectangle))

// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.