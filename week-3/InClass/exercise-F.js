function age(year) {
    return 2022 - year    
}
const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function canDrive(age,year){
    if (age >= 17){
        return `Born in ${year} can drive`;
    }
    const yearsToDrive = 17-age
    return `Born in ${year} can drive in ${yearsToDrive} years`;
}

function getAge(arrayItem) {
    const userAge = age(arrayItem)
    console.log(canDrive(userAge,arrayItem)); 
    }

birthYear.forEach(getAge)
