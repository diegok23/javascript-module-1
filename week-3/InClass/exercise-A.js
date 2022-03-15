const array = ["Diego","Carlos","Cristiane","Valeria", "Alejandro","Jorgelina","Linda","Javier","Ratel","Joao","Victor","Angel","Laeken","Ananda","Vanessa"]
console.log(`Estas son las personas en la sala de Zoom ${array.sort()}`);
console.log(`En la sala de Zoom hat ${array.length} personas`);

array.unshift("Matthew")
array.push("Gloria")

console.log(`En la sala de Zoom, ahora hay ${array.length} personas`);
const first = array[0];
const last = array[array.length -1]

console.log(`Los nuevos nombres son ${first} y ${last}`);