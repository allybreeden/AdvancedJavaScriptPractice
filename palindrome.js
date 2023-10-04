// Write a function that takes in an array of strings and checks to see if each string is a palindrome 
// or not. The function should print the string "yes" or "no" for each string.



let array = ["moon", "mom", "tacocat", "adobo", "agog", "kayak", "bikini", "banana", "level", "garage", "deified", "angora", "radar", "rotator", "dated", "solos", "tenet"];


function isPalindrome (arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        let wordArr = arr[i].split("");
        let newWord = wordArr.reverse().join("");
        if (newWord === currentWord) {
            console.log('yes');;
        } else {
            console.log('no');
        }
    }
}

console.log(isPalindrome(array));