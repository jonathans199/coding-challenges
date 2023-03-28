const { reverseString, reverseStrOneLine, reverseStrWithFor, reverseStrWithReduce } = require('./index')

// reverseString
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('when passed in a Hello, it should return "olleH"', () => {
  expect(reverseString('Hello')).toEqual('olleH')
})

test('', () => {
  expect(reverseString('Jonathan')).toEqual('nahtanoJ')
})

// with reversedStrOneLine
test('reverseString function exists', () => {
  expect(reverseStrOneLine).toBeDefined()
})

test('when passed in a Hello, it should return "olleH"', () => {
  expect(reverseStrOneLine('Hello')).toEqual('olleH')
})

test('f', () => {
  expect(reverseStrOneLine('Jonathan')).toEqual('nahtanoJ')
})

// with reversedStrWithFor
test('reverseString function exists', () => {
  expect(reverseStrWithFor).toBeDefined()
})

test('when passed in a Hello, it should return "olleH"', () => {
  expect(reverseStrWithFor('Hello')).toEqual('olleH')
})

test('when passed in Jonathan, it should return nahtanoJ', () => {
  expect(reverseStrWithFor('Jonathan')).toEqual('nahtanoJ')
})

// with reverseStrWithReduce
test('reverseString function exists', () => {
  expect(reverseStrWithReduce).toBeDefined()
})

test('when passed in a Hello, it should return "olleH"', () => {
  expect(reverseStrWithReduce('Hello')).toEqual('olleH')
})

test('when passed in Jonathan, it should return nahtanoJ', () => {
  expect(reverseStrWithReduce('Jonathan')).toEqual('nahtanoJ')
})
