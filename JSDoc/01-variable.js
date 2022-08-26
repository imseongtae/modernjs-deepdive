// @ts-check

/** @type {string} */
let str = 'string';

/** @type {number} */
let num = 10;

/** @type {boolean} */
let bool = true;

/** @type {any} */
let any = {};

/** @type {?} */
let unknown = {};

/**@type { {id: number, content: string, completed: boolean} } */
let obj = { id: 1, content: 'test', completed: true };

/** @type {string|number} */
let union = 'string' || 10;
console.log(union);

/** @type {Array<{ id: number, content: string, completed: boolean }>} */
let generic = [
  { id: 1, content: 'test-1', completed: true },
  { id: 2, content: 'test-2', completed: true },
];
