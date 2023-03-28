/***
 * Given an array of passengers, sort the passengers by last name,
 */

const passengers = [
	{
		id: 1,
		passengerName: 'Freddie Mercury',
		isVegetarianOrVegan: false,
		connectedFlights: 2,
	},
	{
		id: 2,
		passengerName: 'Amy Winehouse',
		isVegetarianOrVegan: true,
		connectedFlights: 4,
	},
	{
		id: 3,
		passengerName: 'Kurt Cobain',
		isVegetarianOrVegan: true,
		connectedFlights: 3,
	},
	{
		id: 3,
		passengerName: 'Michael Jackson',
		isVegetarianOrVegan: true,
		connectedFlights: 1,
	},
]

// 1. split the passengerName into an array separated by space
// 2. get the last name only
// 3. compare the last names to sort

const sortedList = passengers.sort((a, b) => {
	const user1ln = a.passengerName.split(' ')[1]
	const user2ln = b.passengerName.split(' ')[1]

	// localeCompare returns a number indicating whether a reference string comes before or after or is the same as the given string
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

	return user1ln.localeCompare(user2ln)
})

console.log(sortedList)

//******************** with FOR loop */
// const arrayWithNames = []
// for (let i = 0; i < passengers.length; i++) {
//   if (passengers[i].isVegetarianOrVegan) {
//     arrayWithNames.push(passengers[i].passengerName)
//   }
// }

// const sortedArray = arrayWithNames.sort((a, b) => a - b )

// console.log('sortedArray ->', sortedArray)

//******************** with for EACH  */

// const arrayHere = []
// passengers.forEach(item => arrayHere.push(item.passengerName))

// console.log(arrayHere)

// const passengerNames = passengers.map(item => item.passengerName)
