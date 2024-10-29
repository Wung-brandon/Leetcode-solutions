// const arr = [1, 2, 9, 12, 15]
// const minNum = Math.min(arr)
// const maxNum = Math.max(arr)
// arr.sort((a, b) => a - b)
// const newArr = []
// const range = `${arr[0]} - ${arr[arr.length - 1]}`
// newArr.push(range)
// for (let i = 1; i < arr.length; i++) {
//     // console.log(arr[i] - arr[i - 1])
//     // if (arr[i] - arr[i - 1] > 1) {
//     //     console.log(`Missing numbers: ${arr[i - 1] + 1} through ${arr[i] - 1}`)
//     // }
// }

// // console.log(newArr)

function findMissingNumbers(){
    const arrayNum = [1, 2, 10];
    const missingNumbers = []
    // Find the minimum and maximum numbers in the array
    const min = Math.min(...arrayNum);
    const max = Math.max(...arrayNum);

    const numSet = new Set(arrayNum)
    // console.log(numSet)

    // Loop from min to max and log each number
    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) { // If the number is not in the set, it’s missing
            missingNumbers.push(i)
        }
        // console.log(i);
    }
    console.log('missing Numbers', missingNumbers)
}

