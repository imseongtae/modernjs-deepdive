const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    // constructor 프로퍼티와 생성자 함수간의 연결
    constructor: Person,
    sayHello() {
      console.log(`Hey! My name is ${this.name}`);
    },
  };

  return Person;
})();

const me = new Person('ham');
console.dir(me);

// constructor 프로퍼티가 생성자 함수를 가리킴
console.log('constructor === Person:', me.constructor === Person);
console.log('constructor === Object:', me.constructor === Object);
