function returnBornDate(age) {
  const year = 2022;
  return year - age;
}

function introduceYourself(personName, age) {
  return (
    "Hello my name is " + personName + " and I born in " + returnBornDate(age)
  );
}

console.log(introduceYourself("Diego", 43));
