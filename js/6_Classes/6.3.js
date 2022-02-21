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

const random = () => {
    return Math.floor(Math.random() * 20)+1;
}

const generateRectangle = (n) => {
    let rectangles = []
    let number = 0;

    for(let i = 0; i < n; i++){
        rectangles[i] = new Rectangle(random(), random(), random(), random());
        console.log(rectangles[i]);
    }

    for(let i = 0; i < n-1; i++){
      for(let j = i + 1; j < n; j++ ) {
        if(rectangles[i].collides(rectangles[j]) === true){
          number += 1;
          console.log('rectangles collides:')
          console.log(rectangles[i]);
          console.log(rectangles[j]);
        }
      }
    }

  return number + ' rectangles collide';
}

console.log(generateRectangle(1000));

// Create a program that will re-use the Rectangle class you created previously. 
// It should generate 1000 random instances of Rectangle with random positions and sizes. 
// Then it will display all colliding rectangles amongst those that were generated that way.