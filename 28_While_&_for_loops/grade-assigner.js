// 3. The grade assigner

function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}

console.log(assignGrade(87));
console.log(assignGrade(54));
console.log(assignGrade(96));
console.log(assignGrade(68));

// I REALLY DON'T GET HOW TO USE THE FUCNTION ABOVE IN THE LOOP BELLOW :(
// for (grade = 60; grade <= 100; grade++) {
//     let grade = assignGrade;
//     assignGrade();
//     if (assignGrade === "E") {
//         console .log ("For scoring " + grade  + " points, you get an ");
//     }
//     else if (grade >= 65 && grade <= 69) {
//         console .log ("For scoring " + grade  + " points, you get an D");
//     }
//     else if (grade >= 70 && grade < 79) {
//         console .log ("For scoring " + grade  + " points, you get an C");
//     }
//     else if (grade >= 80 && grade < 89) {
//         console .log ("For scoring " + grade  + " points, you get an B");
//     }
//     else if (grade >= 90) {
//         console .log ("For scoring " + grade  + " points, you get an A");
//     }
// }

// for (let grade = 60; grade <= 100; grade++) {
//     if (grade < 65) {
//         console .log ("For scoring " + grade  + " points, you get an E");
//     }
//     else if (grade >= 65 && grade <= 69) {
//         console .log ("For scoring " + grade  + " points, you get an D");
//     }
//     else if (grade >= 70 && grade < 79) {
//         console .log ("For scoring " + grade  + " points, you get an C");
//     }
//     else if (grade >= 80 && grade < 89) {
//         console .log ("For scoring " + grade  + " points, you get an B");
//     }
//     else if (grade >= 90) {
//         console .log ("For scoring " + grade  + " points, you get an A");
//     }
// }