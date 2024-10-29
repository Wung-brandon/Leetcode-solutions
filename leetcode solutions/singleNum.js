// Method 1 using for loop iteration
function singleNumber(arr){
    let unique = 0
    for (var i = 0; i < arr.length; i++){
        unique ^= arr[i]
    }
    return unique
}

console.log(singleNumber([2, 4, 6, 2, 4, 6, 8])) // Output: 8

// Method 2 using for of loop iteration
function singleNum(arr){
    let unique = 0
    for (const char of arr){
        unique ^= char
    }
    return unique
}

console.log(singleNum([2, 4, 6, 2, 4, 6, 6])) // Output: 6
