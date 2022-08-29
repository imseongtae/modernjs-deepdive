/**
 * Object.create();
 * Creates an object that has the specified prototype, and that optionally contains specified properties.
 * @param o Object to use as a prototype. May be null
 * @param properties JavaScript object that contains one or more property descriptors.
 * @return 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
 */
// ========== divider ==========

console.log(
  '===== prototype이 null인 객체 생성. 생성된 객체는 프로토타입 체인의 종점에 위치함 =====',
);
// obj -> null
let obj = Object.create(null);
console.log('obj.__proto__ === null:', Object.getPrototypeOf(obj) === null);

console.log('\n===== obj = {}; 와 동일 =====');
// obj -> Object.prototype -> null
obj = Object.create(Object.prototype);
console.log(
  'obj.__proto__ === Object.prototype:',
  Object.getPrototypeOf(obj) === Object.prototype,
);

// obj -> Object.prototype -> null
// obj = { x: 1 } 와 동일
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});

// 위 코드는 아래와 동일
// obj = Object.create(Object.prototype);
// obj.x = 1
console.log('obj.x:', obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

console.log('\n===== 임의의 객체를 상속받는 경우 =====');
const myProto = { x: 10 };
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log('obj.x:', obj.x);
console.log(
  'obj.__proto__ === myProto:',
  Object.getPrototypeOf(obj) === myProto,
);

console.log('\n===== 생성자 함수 =====');
function Person(name) {
  this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Ham'); 과 동일
obj = Object.create(Person.prototype);
obj.name = 'Ham';
console.log('obj.name:', obj.name);
