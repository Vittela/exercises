let A = 0; B = 1;

let HowMuchNumbers = Number(prompt("How much numbers of Fibonacci sequence you want see?"))

for (i = 1; i <= HowMuchNumbers; i++) {
  console.log(`${i}° number from fibonnaci sequence: ${A + B}`)

  C = (A + B)
  // console.log(`${A} + ${B} = ${C}`)

  B = A
  A = C
}
