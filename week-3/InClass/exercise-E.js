let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let ages = birthYear.map(age)

function age(year) {
    return 2022 - year    
}

console.log(ages);
