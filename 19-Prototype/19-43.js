function Person(name) {
  this.name = name;
}

const me = new Person('Ham');

const parent = {
  sayHello() {
    console.log(`Hello 43! My name is ${this.name}`);
  },
};

Object.setPrototypeOf(me, parent);
// me.__proto__ = parent
me.sayHello();

console.log('me prototpye:', Object.getPrototypeOf(me)); // parent

console.log('constructor:', me.constructor);
console.log(Person.prototype);
