const person = { name: 'Ham' };

// person 객체는 동결(freeze)된 객체가 아님
console.log('isFrozen:', Object.isFrozen(person));
console.log('descriptor:', Object.getOwnPropertyDescriptor(person, 'name'));

// 객체를 동결시켜서 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지함
Object.freeze(person);

// person 객체는 동결(freeze)된 객체
console.log('isFrozen:', Object.isFrozen(person));
// 동결된 객체는 writable과 configurable이 false다.
console.log('descriptor:', Object.getOwnPropertyDescriptor(person, 'name'));

// 프로퍼티 추가 및 삭제, 갱신 불가
person.favorite = 'hamburger';
delete person.name;
person.name = 'Lee';

// 프로퍼티 재정의 금지
// Object.defineProperty(person, 'name', { configurable: true, writable: true });
// TypeError: Cannot redefine property: name
console.log(person);
