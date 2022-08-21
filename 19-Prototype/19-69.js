const personPrototype = { hobby: 'Football' };

const person = {
  name: 'Ham',
  address: 'Seoul',
  __proto__: personPrototype,
};

for (const key in person) {
  // if (!person.hasOwnProperty(key)) continue;
  if (!Object.prototype.hasOwnProperty.call(person, key)) continue;
  console.log(key, ':', person[key]);
}
