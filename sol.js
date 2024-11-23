class Animal {
  response = "ok";

  constructor(name) {
    this.name = name;
  }
  move() {
    console.log("Animal is moving " + this.name);
    console.log(this.response);
  }
  jump() {
    console.log("Animal is jumping " + this.name);
    console.log(this.response);
  }
}
let lion = new Animal("lion");
let tiger = new Animal("tiger");
lion.move();
tiger.move();
lion.jump();
tiger.jump();
console.log(lion.name);
console.log(tiger.name);
