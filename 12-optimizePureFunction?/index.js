/***
 * Given that a pure function always returns the same data type, how can this function be optimized? 
 * 
 * 
 * Pure Function: always returns the same result, no side effects
 * - does not rely external data
 * - no side effects, not changing the input outside
 * - not changing the original data
 * 
 * Answer: 
 * with Memoization or Caching
 * https://blog.openreplay.com/forever-functional-memoizing-functions-for-performance/
 * https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
 */

// ---------------------
// Consider a pure function like:
// type fn = (a: string, b: string) => string


