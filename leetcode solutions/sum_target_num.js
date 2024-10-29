// Approach method 1
function sumTargetNum(arr, target){
    let map = new Map();
    console.log('map before', map);
    for(let i = 0; i < arr.length; i++){
        let complement = target - arr[i];
        console.log('complement', complement);
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    console.log('map after', map);
    return [];
    
}

console.log(sumTargetNum([2, 4, 6, 3, 7, 5], 5)); // Output: [1, 3]

// Approach method 2
function sumTarget(){
    for (let i = 0; i < arr.length; i++){
        // console.log('i', arr[i]);
        for (let j = 0; j < arr.length; j++){
            // console.log('i-j', arr[j]);
            if (arr[j] + arr[i] == target){
                console.log('index', [i, j]);
                return [arr[j], arr[i]];
            } 
        }  
    }
    return []
}