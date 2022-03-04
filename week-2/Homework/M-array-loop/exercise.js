/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function getDaysStartingWithT(days) {
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    if (day.startsWith("T")) {
      console.log(day);
    }
  }
}
getDaysStartingWithT(daysOfWeek);
