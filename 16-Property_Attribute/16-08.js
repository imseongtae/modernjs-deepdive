const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Haemil',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, 'lastName', {
  value: 'Im',
  // enumerable: true, // node에서는 enumerable 값에 따라 console 출력이 결정됨
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName: ', descriptor);
// firstName { value: 'Haemil', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName: ', descriptor);
// lastName { value: 'Im', writable: false, enumerable: false, configurable: false }

// [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 열거할 수 없음
// 해당 프로퍼티는 for...in문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person)); // ['firstName']

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]값을 변경할 수 없음
// 값을 변경하면 에러는 발생하지 않고 무시됨
person.lastName = 'Kim';
console.log('lastName:', person);

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제 불가
// 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
delete person.lastName;

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다
// TypeError: Cannot redefine property: lastName
// Object.defineProperty(person, 'lastName', { enumerable: true });

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName: ', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  // getter
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('==================');
// console.log('fullName', descriptor);

// person.fullName = 'Haemil Im';
// console.log(person);
