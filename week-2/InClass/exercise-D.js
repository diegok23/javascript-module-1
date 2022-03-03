function myMood(mood) {
  if (mood === "happy") {
    return "Good job, you're doing great!";
  } else if (mood === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof mood === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}
console.log(myMood("textoPrueba"));

/* Hecho por el profesor */

/* 
function name(mood) {
  if (mood === "happy") {
    return "Good job, you're doing great!";
  } else if (mood === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof mood === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}
console.log(name("happy"));
 */
