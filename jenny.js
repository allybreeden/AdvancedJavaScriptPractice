// INSTRUCTIONS:

// 	Write a function that takes in a string that is a combination of letters, numbers, spaces, and possibly other characters.

// 	Remove everything except the numeric digits so that one big number is formed.

// 	Multiply that number by 3, then subtract 100.

// 	Add a hyphen after the third character and return the final string.

//  Test your function with the string provided.

// 	Remember to speak aloud as you are solving and coding, explaining your thought process. This will help you prepare for doing it in a live interview setting.


let jenny = "j02en8 9nysn1u m80b e3r";


//find numbers

//multiple number by 3, then subtract 100


function findNumbers(str) {
    let numbers = "";
    for (let i = 0; i < str.length; i++) {
       if (!isNaN(str[i]) && str[i] !== " ") {
        numbers += str[i];
        }
    }
    let sum = numbers  * 3 - 100;
    return sum;
}
    
console.log(findNumbers(jenny));