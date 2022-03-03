function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let numberToProcess = 5; numberToProcess < 20; numberToProcess++) {
  if (isEven(numberToProcess)) {
    console.log(
      `The exponential of ${numberToProcess} is ${exponential(numberToProcess)}`
    );
  }
}
