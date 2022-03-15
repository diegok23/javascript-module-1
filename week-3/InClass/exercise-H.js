const namesArray = ["James", "Elamin", "Ismael", "Sanyia", "Chris", "Antigoni"];

function lookForName (name){  
    if (namesArray.includes(name)){
    return "Found me!";
}
    return "Haven't found me :(";
}

console.log(lookForName("Diego"))