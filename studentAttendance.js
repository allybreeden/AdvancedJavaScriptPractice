// Interviewer instructions to interviewee:

// 	A school tracks its students' attendance using a simple string with three possible characters:
// 		P - present
// 		L - late
// 		A - absent
// 	For each class in a course, one of these three characters is added to the string.

// 	You will write a function that accepts an array of these strings, each representing the attendance 
// record for a student enrolled in the course. 
	
// 	For each string in the array, print the word "drop" if a student has been absent more than two times 
// OR if they have been late three classes in a row. Otherwise print the word "ok".

// 	Example records for 5 students for the first 9 classes of the semester: 
// 	["PPLPAPLLP", "PPLPAPLAA", "PLAPLPAPP", "PPPAPPLLL", "LPPPPLPPP"]

let records = ["PPLPAPLLP", "PPLPAPLAA", "PLAPLPAPP", "PPPAPPLLL", "LPPPPLPPP"];


function studentStatus(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("LLL")) {
            console.log("drop");
        } else {
            let count = 0;
            for (let j = 0; j < arr[i].length; j++) {
                if (records[i][j] === 'A') {
                    count++;
                }
            }
            if (count > 2) {
                console.log("drop");
            } else {
            console.log("ok");
            }
        } 
    }
}

console.log(studentStatus(records));


// APPROACH 2 using .split and .join to remove "A"s and compare lengths
// function evaluateAttendance2(records) {
// 	for (let i=0; i < records.length; i++) {
// 		if (records[i].includes("LLL")) { // could combine first two with || but would be a long line
// 			console.log("drop");
// 		} else if (records[i].length - records[i].split("A").join("").length > 2) {
// 			console.log("drop");
// 		} else {
// 			console.log("ok");
// 		}
// 	}
// }
