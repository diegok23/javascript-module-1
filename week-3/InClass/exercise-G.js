const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const canDrive = birthYear.filter(num => (2022-num)>=17)

console.log(`These are the birth years of people who can drive: ${canDrive.join(", ")}`)
console.log(canDrive);