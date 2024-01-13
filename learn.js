let str = "Hello, World!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false
console.log(str.startsWith("Hello world")); // false

let prefix = "Hello";

console.log(str.startsWith(`${prefix}`)); // true
