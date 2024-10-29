// Approach method 1
function charCount(str){
    // make object to return at the end
    // loop over string, for each character..
    // if character is a number/letter and is not in map yet, add it with value 1
    // if character is already in map, increment its value by 1

    // create empty map object
    // loop over string
    // for each character, if it's not in map, add it with value 1
    // if it's already in map, increment its value by 1
    // if character is something else (space, period, etc) don't do anything   

    // return the map object with character counts
    var result = {};
    for (var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            if (result[char] > 0){
                result[char]++
            } else{
                result[char] = 1
            }
        }
        
    }
    return result;

    
}

console.log(charCount("Hello World")); // {H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1}

// Approach method 2

function charCount(str){
    const result = {}
    for (const char of str.toLowerCase()){
        result[char] = (result[char] || 0) + 1
    }
    return result
}

// Approach method 3

let char = 'hello world. i like you. The Is HELLO 12345'
let trimChar = char.split(" ").join("").toLowerCase();
let map = new Map()
for (let i = 0; i < trimChar.length; i++){
    if (map.has(trimChar[i])){
        map.set(trimChar[i], map.get(trimChar[i]) + 1)
    }
    else{
        map.set(trimChar[i], 1)
    }
    console.log('char: ' , trimChar[i])
}
console.log('trimChar map', map)
// console.log(trimChar)