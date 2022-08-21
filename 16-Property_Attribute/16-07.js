const person = {
  // 데이터 프로퍼티
  firstName: 'Haemil',
  lastName: 'Im',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출됨
person.fullName = 'Hamburger Im';
console.log('fullName:', person.fullName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
console.log('fullName:', person.fullName);

// firstName은 데이터 프로퍼티이며, 다음과 같은 프로퍼티 어트리뷰트를 갖는다.
// 데이터 프로퍼티는 [[Value]], [[Writable]]. [[Enumerable]], [[Configurable]]
const dataPropertyDescriptor = Object.getOwnPropertyDescriptor(
  person,
  'firstName',
);
console.log('dataPropertyDescriptor:', dataPropertyDescriptor);

// fullName은 접근자 프로퍼티이며, 다음과 같은 프로퍼티 어트리뷰트를 갖는다
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
const accessorPropertyDescriptor = Object.getOwnPropertyDescriptor(
  person,
  'fullName',
);
console.log('accessorPropertyDescriptor:', accessorPropertyDescriptor);
