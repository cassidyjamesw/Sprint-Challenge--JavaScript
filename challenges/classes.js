// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/

class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task

class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(attributes);
  }
  cubeVolume() {
    return this.length * 3;
  }
  cubeSurface() {
    return this.length * 6;
  }
}

const cube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurface()); // 130
