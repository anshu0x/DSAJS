// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   hello() {
//     console.log(`hello ${this.name} your age is  ${this.age}`);
//   }
//   //  this function can be used without crating an object it doesnot have this access
//   static add(a, b) {
//     console.log(a + b);
//   }
// }

// let a = new Animal("sid", 34);
// a.hello();
// Animal.add(1, 4);
// class Dog extends Animal {
//   constructor(name, age, obj) {
//     super(name, age);
//     this.obj = obj;
//   }
//   loda() {
//     console.log(
//       `hello ${this.name} your age is ${this.age} you are buying a new ${this.obj}`
//     );
//   }
// }

// let d = new Dog("sim", 12, "car");
// d.loda();

class Employe {
  constructor(name) {
    this.name = name;
  }
  leave() {
    console.log(`leaving ${this.name}`);
  }
  logout(arg) {
    console.log(`logging out ${this.name} ${arg}`);
  }
}

let anshu = new Employe("anshu sharma");
let shub = new Employe("shub sharma");

// anshu.leave()
// shub.logout()

class Manager extends Employe {
  //  we are overriding constructor here if we do not create a cosntrouctor it will be automatically createdhere 
  // constructor(...args) {
  //   super(...args){}

  constructor(name,age) {
    super(name)
    this.age = age;
  }
  come() {
    // console.log(`your age is ${this.age}`);
    console.log(`${this.name} your age is ${this.age}`);
  }
  // overriding function/ method
  logout(){
    //  we can also use super keyword to get access of parent class fucntions 
    // console.log(`logging out ${this.name} at 9pm`);
    super.logout(34)
    //  we can also use conditional statements here 
  }
}

// let man1 = new Manager(32);
let man1 = new Manager("shubman",32);
man1.come()
man1.leave()
man1.logout()
