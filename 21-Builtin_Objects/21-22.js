/**
 * 주어진 숫자가 NaN인지 확인하고 그 결과를 반환한다
 * @param {number} testValue 검사 대강 값
 * @return {boolean} NaN 여부 확인 결과
 * isNaN(testValue)
 */

// Number
console.log('isNaN(NaN):', isNaN(NaN));
console.log('isNaN(10):', isNaN(10));

// String
console.log('\nString');
console.log('isNaN("blah-blah-blah"):', isNaN('blah-blah-blah'));
console.log('isNaN("10"):', isNaN('10'));

// Boolean
console.log('\nBoolean');
console.log('isNaN(true}):', isNaN(true));
console.log('isNaN(false}):', isNaN(false));

// undefined
console.log('\nundefined');
console.log('isNaN(undefined}):', isNaN(undefined));

//  object
console.log('\nobject');
console.log('isNaN({}):', isNaN({}));

// date
console.log('\ndate');
console.log('new Date():', new Date());
console.log('isNaN(new Date()):', isNaN(new Date()));
console.log('isNaN(new Date().toString()):', isNaN(new Date().toString()));
