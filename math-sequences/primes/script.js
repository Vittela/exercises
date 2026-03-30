const howMuchNumbers = prompt("Write a number");

for (i = 1; i <= howMuchNumbers; i++) {
  if (isPrime(i)) { console.log(`${i} is prime`) }
}


function isPrime(number) {
  let counter = 0

  for (a = 1; a <= number; a++) {
    if ((number % a) === 0) {
      counter += 1;
    }
  }

  if (counter > 2) { return false; }
  else { return true; }
}
