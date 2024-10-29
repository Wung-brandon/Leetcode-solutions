let arr1 = [1, 2, 4]
let arr2 = [1, 3, 4]
let arr3 = arr1.concat(arr2)
// console.log('joined list', arr3)
const sortedList = arr3.sort((a, b) => a - b)
console.log('sortedList', sortedList)