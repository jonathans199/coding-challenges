/***
 *  What is debounce?
 *  - In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions,
 *    text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.
 *
 * Basically is method to delay the responses to be sent to a function, to avoid duplicates and un-neccesary API calls
 *
 * 1. define a HigherOrderFunction that returns another function
 * 2. upon every click, reset the timeoutID
 * 3. until delay time has passed then return the call back function
 */

const debounce = (fn, delay) => {
	let timeoutID

	return function () {
		if (timeoutID) {
			clearTimeout(timeoutID)
		}

		// timeoutID is return by default from setTimeOut = integer
		timeoutID = setTimeout(() => {
			fn() // only run this one after delay has passed and the timeout is not cleared
		}, delay)
	}
}

document.getElementById('myBtn').addEventListener(
	'click',
	debounce(() => {
		console.log('clicked')
	}, 2000)
)
