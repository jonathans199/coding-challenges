/***
 * Given that a pure function always returns the same data type, how can this function be optimized? 
 * 
 * Answer: 
 * with Memoization or Caching
 * https://blog.openreplay.com/forever-functional-memoizing-functions-for-performance/
 * https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
 */

// ---------------------
// Consider a pure function like:
// type fn = (a: string, b: string) => string