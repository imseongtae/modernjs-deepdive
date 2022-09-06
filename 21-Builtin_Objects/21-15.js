console.log(eval('1 + 2'));

eval('var x = 5;');
console.log('x:', x); // 5

const o = eval('({ a: 1 })');
console.log('o:', o);

const f = eval('(function() { return 1; })');
console.log('f():', f()); // 1

console.log(eval('1 + 2; 3 + 4;')); // 7
