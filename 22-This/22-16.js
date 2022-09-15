function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Ham');
// getName 메서드를 호출한 객체는 me
console.log('me name:', me.getName());

Person.prototype.name = 'Kim';
// getName을 호출한 객체는 Person.prototype
console.log('Person.prototype.getName():', Person.prototype.getName());
