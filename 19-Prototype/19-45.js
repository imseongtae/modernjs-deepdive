/**
 * Person 생성자 함수
 * @param {string} name
 */
function Person(name) {
  this.name = name;
}

const me = new Person('Ham');

/** Prototype 으로 교체할 객체 */
const parent = {
  // constructor 프로퍼티와 생성자 함수 간의 연결 설정
  constructor: Person,
  /** Method of Prototype */
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// 생성자 함수에 의한 프로토타입의 교체
Person.prototype = parent;

// 인스턴스에 의한 프로토타입의 교체
Object.setPrototypeOf(me, parent); // me.__proto__ = parent 와 동일

me.sayHello(); // Hi! My name is Ham

// constructor 프로퍼티가 생성자 함수를 가리킴
console.log('me.constructor === Person:', me.constructor === Person);
console.log('me.constructor === Object:', me.constructor === Object);

// 생성자 함수의 프로토타입 프로퍼티가 교체된 프로퍼타입을 가리킴
// 1. Person.prototype = parent
// 2. me.__proto__ = parent
console.log(
  'Person.prototype === Object.getPrototypeOf(me):',
  Person.prototype === Object.getPrototypeOf(me),
);
