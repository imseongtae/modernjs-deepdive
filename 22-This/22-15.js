const person = {
  name: 'Ham',
  getName() {
    return this.name;
  },
};

console.log('person.name:', person.getName());

const anotherPerson = { name: 'Kim' };

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson
console.log('anotherPerson.name:', anotherPerson.getName());

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName를 일반 함수로 호출
console.log('getName():', getName());
// Node.js 환경에서 this.name은 undefined
