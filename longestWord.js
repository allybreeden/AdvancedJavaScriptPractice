// Write a function that takes in an array of strings and finds the longest word that has no repeating letters. 
// The function should return the longest word.


array = ["mom", "blithe", "get", "absolute", "tacocat", "adobo", "audio", "agog", "morn", "question", "exhorting", "image", "obstacle"];

function findTheLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        let usedLetters= [];
        let currentWord = arr[i];
        for (let j=0; j < currentWord.length; j++) {
            if (usedLetters.includes(currentWord[j])) {
                break;
            } else {
                usedLetters.push(currentWord[j]);
                if (j = currentWord.length - 1 && currentWord.length > longestWord.length) {
                    longestWord = currentWord;
                }
            }
        }
    }
    return longestWord;
}
console.log(findTheLongestWord(array));