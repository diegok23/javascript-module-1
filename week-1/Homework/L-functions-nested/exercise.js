function mentorName(name) {
  return name.toUpperCase();
}

function greetingMentor(name, greeting) {
  return `${greeting} ${mentorName(name)}`;
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greetingMentor(mentor1, "HELLO"));
console.log(greetingMentor(mentor2, "HELLO"));
console.log(greetingMentor(mentor3, "HELLO"));
console.log(greetingMentor(mentor4, "HELLO"));
console.log(greetingMentor(mentor5, "HELLO"));
