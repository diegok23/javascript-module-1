/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

const userName = "Daniel";
const userRole = "mentor";

if (userRole === "mentor" || userRole === "student") {
  console.log(`Hi, I'm ${userName}, I'm a ${userRole}`);
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
