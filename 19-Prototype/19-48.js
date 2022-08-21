// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('ham');

// 프로토타입으로 교체할 객체
const parent = {};
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다
console.log('Person.prototype === parent:', Person.prototype === parent);
console.log('parent.constructor === Person: ', parent.constructor === Person);
console.log('parent.constructor === Object: ', parent.constructor === Object);

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩
Person.prototype = parent;

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않으므로 false로 평가됨
console.log('me instanceof Person:', me instanceof Person);
// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가됨
console.log('me instanceof Object:', me instanceof Object);
