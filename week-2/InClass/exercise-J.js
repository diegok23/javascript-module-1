function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

let array = ["Alba", "Amy", "Anna"];

console.log(secondMatchesAmy(array));

array[1] = "Andy";

console.log(secondMatchesAmy(array));
