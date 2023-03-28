// shallow copy
// why are these two console logs return the same new_email item? 

const oldObj = {
	contact: {
		email: 'old_email',
	},
}
console.log(' before oldObj ->', oldObj.contact.email) // old_email

const newObj = {
	...oldObj,
}

console.log('newObj.contact.email ->', newObj.contact.email) // old_email

newObj.contact.email = 'new_email'

console.log('oldObj.contact.email  before ->', oldObj.contact.email) //  new_email - why? 
console.log('newObj.contact.email after ->', newObj.contact.email) // new_email - ok

// What are the logs, and why?
console.log(oldObj.contact.email) // ? old_email
console.log(newObj.contact.email) // ? old_email
