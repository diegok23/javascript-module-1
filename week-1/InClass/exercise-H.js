function total(name, age) {
  const year = 2022;
  const born = year - age;
  const message = `My name is ${name}, I was born in the year ${born}, and I'm ${age} old.`;
  return message;
}

let greeting = total("Diego", 43);

console.log(greeting);
