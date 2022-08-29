const personPrototype = { hobby: 'Football' };

const person = {
  name: 'Ham',
  address: 'Seoul',
  __proto__: personPrototype,
};

for (const key in person) {
  // 상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거한다
  // if (!person.hasOwnProperty(key)) continue;
  if (!Object.prototype.hasOwnProperty.call(person, key)) continue;
  console.log(key, ':', person[key]);
}
