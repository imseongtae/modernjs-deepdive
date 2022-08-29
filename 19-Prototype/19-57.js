/** 생성자 함수 */
function Person(name) {
  this.name = name;
}

// Prototype Method
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// Static Property
Person.staticProp = 'static prop';

// Static Method
Person.staticMethod = function () {
  console.log('static method');
};

console.log('Static Property:', Person.staticProp);

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출된다.
Person.staticMethod(); // Static Method

const me = new Person('Ham');
// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다
me.staticMethod();
// TypeError: me.staticMethod is not a function
