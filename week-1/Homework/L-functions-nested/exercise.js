function mentorName(name) {
  return name.toUpperCase();
}

function greetingMentor(name, greeting) {
  return `${greeting} ${mentorName(name)}`;
}

const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

console.log(greetingMentor(mentor1, "HELLO"));
console.log(greetingMentor(mentor2, "HELLO"));
console.log(greetingMentor(mentor3, "HELLO"));
console.log(greetingMentor(mentor4, "HELLO"));
console.log(greetingMentor(mentor5, "HELLO"));
