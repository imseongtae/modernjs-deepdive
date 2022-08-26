// @ts-check

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - 할일 id
 * @property {string} content - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];

console.log(todos);
