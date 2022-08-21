const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`);
  };

  // 생성자 함수 반환
  return Person;
})();

const me = new Person('Ham');
me.sayHello(); // 프로토타입 메서드가 호출됨
console.log(me);

// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메서드가 호출됨. 프로토타입 메서드는 인스턴스 메서드에 의해 가려짐
me.sayHello(); // property shadowing
