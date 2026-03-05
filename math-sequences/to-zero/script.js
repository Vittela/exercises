let number = Number(prompt("Enter a number and I will count it down to zero."));
let step = 0;

if (number > 0) {
  step = -1
}
else {
  step = 1
}

for (; number !== 0; number += step) {
  console.log(number)

  // Return zero
  if (number === 1 || number === (-1)) {
    console.log(0)
  }
}
