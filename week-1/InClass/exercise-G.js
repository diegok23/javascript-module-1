const numberOfStudents = 15;
const numberOfMentors = 8;
const totalClass = numberOfMentors + numberOfStudents;
const percentageStudents = Math.round((numberOfStudents * 100) / totalClass);
const percentageMentors = Math.round((numberOfMentors * 100) / totalClass);
console.log("Total of Students in class: " + percentageStudents + "%");
console.log("Total of Mentors in class: " + percentageMentors + "%");
