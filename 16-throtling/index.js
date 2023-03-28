/****
 * Debounce only sends last click
 * Throttling will send the first one
 */

const throttle = (fn, delay) => {
	let lastClick = 0

	return () => {
		const now = new Date().getTime()
		console.log(now)

		if (now - lastClick < delay) {
			return
		}

		last = now
		console.log(lastClick)
		return fn()
	}
}

document.getElementById('myBtn').addEventListener(
	'click',
	throttle(() => {
		console.log('clicked')
	}, 5000)
)
