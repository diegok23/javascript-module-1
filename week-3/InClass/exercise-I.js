const messyArray = [100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN"];;

const arrengedArray = messyArray.filter((arrayItem) => typeof arrayItem === "string").map((arrayItem) => arrayItem.toUpperCase() + "!");

console.log(arrengedArray);