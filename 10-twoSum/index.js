/***
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *  You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */

/**
 * Using brute force - not ideal answer but works
 * Speed 5.36ms
 *
 * 1. Loop over the array 1 time
 * 2. Loop over the array 2 time
 * 3. within the 2nd loop check if the first item added to the second item equals target
 * 4. if it does return the index of each in array
 */
// const twoSum = (arr, target) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === target) {
// 				return [i, j]
// 			}
// 		}
// 	}
// }

/***
 * Using Object
 * speed 5.18ms
 *
 * 1. Create Object to hold the difference in between each number and the target
 * 2. Check if the difference pair in object is already there - if not it returns undefined
 * 3. If not undefined then return the value of the key pair found
 * 4. If difference pair is found in object then return pairs value
 */

// const twoSum = (arr, target) => {
// 	const myObj = {}

// 	for (let i = 0; i < arr.length; i++) {
// 		const value = arr[i]
// 		const differencePair = target - arr[i]

// 		// 2. Check if the difference pair in object is already there - if not it returns undefined
// 		if (myObj[differencePair] !== undefined) {
// 			// 3. If not undefined then return the value of the key pair found
// 			return [myObj[differencePair], i]
// 		} else {
// 			myObj[value] = i
// 		}
// 	}
// }

/***
 * Using a HashMap
 * speed 7.95
 * 1. create a Map object to remember de difference in pairs
 * 2. set the map to add the new value in array with is index
 * 3. check if map.has the diffPair already
 * 4. if it does then return an array with the index of the value found
 */

const twoSum = (arr, target) => {
	const map = new Map()

	for (let i = 0; i < arr.length; i++) {
		const diffPair = target - arr[i]

		if (map.has(diffPair)) {
			return [map.get(diffPair), i]
		}
		map.set(arr[i], i)
	}
}

console.time()
console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.timeEnd()

console.log(twoSum([3, 3], 6)) // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)) // [ 1, 2 ]
console.log(twoSum([3, 2, 3], 6)) // [ 0, 2 ]
