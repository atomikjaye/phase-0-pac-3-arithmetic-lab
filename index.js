function add(num1, num2) {
  return num1 += num2
}
function subtract(num1, num2) {
  return num1 -= num2
}
function multiply(num1, num2) {
  return num1 *= num2
}
function divide(num1, num2) {
  return num1 /= num2
}
function increment(num1) {
  return num1 += 1
}
function decrement(num1) {
  return num1 -= 1
}
function makeInt(numString) {
  return parseInt(numString, 10)
}

function preserveDecimal(numString) {
  return parseFloat(numString)
}