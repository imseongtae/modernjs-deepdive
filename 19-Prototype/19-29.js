function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Ham');

// hasOwnProperty는 Object.prototype의 메서드다
console.log(me.hasOwnProperty('name')); // true

const isPersonPrototype = Object.getPrototypeOf(me) === Person.prototype;
console.log('is person prototype?', isPersonPrototype);

// 프로토타입의 프로토타입은 언제나 Object.prototype 이다
const isObjectPrototype =
  Object.getPrototypeOf(Person.prototype) === Object.prototype;
console.log('is object prototype?', isObjectPrototype);
