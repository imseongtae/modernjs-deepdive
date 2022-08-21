const person = { name: 'Haemil' };

// person 객체는 확장이 금지된 객체가 아니다.
console.log('isExtensible:', Object.isExtensible(person));

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지함
Object.preventExtensions(person);

// person 객체는 확장이 금지된다
console.log('isExtensible:', Object.isExtensible(person));

// 프로퍼티 추가가 금지됨
person.favoriteFood = 'hamburger';
console.log(person); // { name: 'Haemil' }

// 프로퍼티 추가는 금지되지만 삭제는 가능
// delete person.name;
// console.log(person);

// 프로퍼티 정의에 의한 프로퍼티 추가는 금지되지만
// 프로퍼티 어트리뷰트 재정의는 가능
Object.defineProperty(person, 'name', { value: 'hamburger' });
console.log('Descriptor:', Object.getOwnPropertyDescriptor(person, 'name'));
