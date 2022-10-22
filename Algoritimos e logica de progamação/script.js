let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
alert(`A soma de ${numberOne} com  ${numberTwo} é igual a ${sum}`)

const subtraction = numberOne - numberTwo
alert(`A subtração de ${numberOne} por  ${numberTwo} é igual a ${subtraction}`)

const multiplication = numberOne * numberTwo
alert(`A multiplicação de ${numberOne} por ${numberTwo} é igual a ${multiplication}`)

const division = numberOne / numberTwo
alert(`A divisão de ${numberOne} de  ${numberTwo} é igual a ${division}`)

const rest = numberOne % numberTwo
alert(`A o resto da divisao de ${numberOne} por ${numberTwo} é igual a ${rest}`)

if (sum%2 === 0) {
  alert(`A soma dos dois números é igual a ${sum} e o numero é par`)
} else {
  alert(`A soma dos dois números é igual a ${sum} e o numero é impar`)
}

if (numberOne === numberTwo){
  alert(`${numberOne} e ${numberTwo} são iguais`)
} else {
  alert(`${numberOne} e ${numberTwo} são diferentes`)
}