const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Haemil',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Im',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName = 'Hamburger Im';
console.log(person);

const descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);
