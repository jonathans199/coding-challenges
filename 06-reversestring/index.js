/* ---- Directions
  Given a string, return a new string with the reversed
  order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

/**
 * Straight forward way
 */
function reverseString(str) {
	// 1. split the string into Array
	const strInArray = str.split('')
	// 2. .reverse() that Array
	const arrayReversed = strInArray.reverse()
	// 3. use the join() method to group all items back into string
	const finalReversedStr = arrayReversed.join('')
	// 4. return the reversed string
	return finalReversedStr
}

// --- chained command - one line
const reverseStrOneLine = str => str.split('').reverse().join('')

/* With For Loop -
 * -- using new For Loop style -
 */
const reverseStrWithFor = str => {
	let reversedStr = ''

	// for (let characther of str) {
	//   reversedStr = characther + reversedStr
	//   console.log(reversedStr)
	// }

	// using original for loop
	for (let i = 0; i < str.length; i++) {
		reversedStr = str[i] + reversedStr
	}

	return reversedStr
}

/**
 With Reduce 
 */
const reverseStrWithReduce = str => {
	// // 1. split string characters into an array
	// // 2. loop through the characters then add each character in backwards
  debugger
	return str.split('').reduce((accumulator, character) => {
		return character + accumulator
	}, '')

	// in one line
	// return str.split('').reduce((accumulator, character) => character + accumulator, '')
}

reverseStrWithReduce('Jonathan')

/**
 * With Recursion - review
 */
const reverseWithRecursion = str => {
	if (str === '')
		// This is the terminal case that will end the recursion
		return ''
	else return reverseWithRecursion(str.substr(1)) + str.charAt(0)
}

module.exports = { reverseString, reverseStrOneLine, reverseStrWithFor, reverseStrWithReduce, reverseWithRecursion }
