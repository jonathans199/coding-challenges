// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// 1. convert n to string with toString()
	// 2. then split(') into array
	// 3. reverse() the array
	// 4. join() put back together as string
	// 5. convert reversed string back to integer with parseInt()

	const int = parseInt(n.toString().split('').reverse().join(''))

	// 6. If n was negative originally, then turn int into a negative

	if (n < 0) {
		return int * -1
	} else return int
}

console.log(reverseInt(-90))
console.log(reverseInt(-51))

module.exports = reverseInt
