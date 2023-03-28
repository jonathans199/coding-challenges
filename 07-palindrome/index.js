// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// return str === str.split('').reverse().join('')

	// const reversedStr = str.split('').reverse().join('')

	/* reduce */ 
	// const reversedStr = str.split('').reduce((acc, cur) => {
	// 	return cur + acc
	// })

	return (
		str ===
		str.split('').reduce((acc, cur) => {
			console.log(acc)
			return cur + acc
		})
	)

	// return reversedStr === str

	/*  with every */
	// return str.split('').every((char, i) => {
	// 	return char === str[str.length - i - 1]
	// })
}

const isPalindrome = palindrome('jonathan')

console.log(isPalindrome)

module.exports = palindrome
