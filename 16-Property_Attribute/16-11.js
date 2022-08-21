const person = { name: 'Ham' };

// person 객체는 밀봉(seal)된 객체가 아님
console.log('isSealed:', Object.isSealed(person));
console.log('descriptor:', Object.getOwnPropertyDescriptor(person, 'name'));

// 프로퍼티 추가, 삭제, 재정의가 금지됨
Object.seal(person);

// person 객체는 밀봉(seal)된 객체
console.log('isSealed:', Object.isSealed(person));
console.log('descriptor:', Object.getOwnPropertyDescriptor(person, 'name'));

// 프로퍼티 추가, 삭제,
person.favoriteFood = 'hamburger';
delete person.name;

// TypeError: Cannot redefine property: name
// Object.defineProperty(person, 'name', { configurable: true });
