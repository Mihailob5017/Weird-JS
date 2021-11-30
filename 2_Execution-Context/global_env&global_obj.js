// Code runs in Base/Global Execution Context
// This is accesible everywhere
// It creates two things:

// 1.Global Object
// 2."this" (in case of a frontend this would be window for browser)

console.log(this);
this.a = 12;
console.log(this);

// Global = "Not inside a Function"

const aa = '12';
// A function can be a value
const b = function () {};

console.log(this, aa, b);
