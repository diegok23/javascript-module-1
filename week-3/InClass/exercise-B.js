const arrayClassSpanish = ["Diego","Carlos","Cristiane","Valeria", "Alejandro","Jorgelina","Linda","Javier","Ratel","Joao","Victor","Angel","Laeken","Ananda","Vanessa"]
const arrayClassEnglish = ["Mathew", "Gloria", "Alissa", "Juan", "María"]
const arrayTotal = arrayClassSpanish.concat(arrayClassEnglish).sort();

/* console.log(arrayTotal.sort());
 */

/* 
function isTheNameInTheArray(studentName, array) {
  if (!array.includes(studentName)) {
    return `${studentName} is not at the class with ${array}`;
  }
  return `${studentName} is at the class with ${array}`;
}
console.log(isTheNameInTheArray("Diago", arrayTotal));
 */

/* function wichClass(name) {
  if (isTheNameInTheArray) {
    if (arrayClassSpanish.includes(name)) {
      return "Y está en la clase en Español";
    }
    return "Y está en la clase en Inglés";
  }
}
console.log(wichClass("Diego"));
 */

//

function studentIsInClass(array,student){
    let studentIndex = array.indexOf(student);
  
  if (!array.includes(student)){
    return `${student} is not at the class with ${array.join(", ")}`;
  }
    array.splice(studentIndex, 1)
    console.log(array);
  return `${student} is at the class with ${array.join(", ")}`;
}
console.log(studentIsInClass(arrayTotal,"Diego"))
