const userNumber = prompt("Write a number");
let counter = 0

console.log(`${userNumber} is prime? ${isPrime(userNumber)}`)

function isPrime(number) {
  for (i = 1; i <= number; i++) {
    if ((number % i) === 0) {
      counter += 1;
    }
  }

  if (counter > 2)  { return false; }
  else              { return true;  }
}
