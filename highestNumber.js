
// Given an array (or list) of integers, find and return the index of the highest value in the array.



let numbers = [23, 5, 87, 1, -3, 95, 25, 47];


// PSEUDO CODE FIRST

// loop through array
    // create variable to compare against - highest
    // compare each number against highest
    // if higher, change the value of highest to the current number
    // otherwise, do nothing
// return highest

// THEN CODE IT

function findHighestNumber(arr) {
    let biggestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNum) {
            biggestNum = arr[i]
        }
    }
    return arr.indexOf(biggestNum);
}

console.log(findHighestNumber(numbers));