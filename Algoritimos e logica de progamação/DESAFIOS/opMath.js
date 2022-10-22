alert ("Vamos realizar as operações matemáticas")
let numberOne = prompt("Qual o primeiro numero a ser operado")

let numberTwo = prompt("Qual o segundo numero a ser operado")

let operator = prompt("Qual a operação a ser feita?(Soma +, Subtraçãpo -, Multiplicação *,Divisão /, Resto da divisão %)")

let result

switch (operator) {
  case "/":
    result = Number(numberOne) / Number(numberTwo)
    alert(`A divisão de ${numberOne} por ${numberTwo} é igual a ${result}`)
  break;

  case "+":
    result = Number(numberOne) + Number(numberTwo)
    alert(`A soma de ${numberOne} com ${numberTwo} é igual a ${result}`)
  break;

  case "-":
    result = Number(numberOne) - Number(numberTwo)
    alert(`A subtração de ${numberOne} de ${numberTwo} é igual a ${result}`)
  break;

  case "*":
    result = Number(numberOne) * Number(numberTwo)
    alert(`A multiplicação de ${numberOne} por ${numberTwo} é igual a ${result}`)
  break;

  case "%":
    result = Number(numberOne) % Number(numberTwo)
    alert(`A o resto da divisão de ${numberOne} por ${numberTwo} é igual a ${result}`)
  break;

  default:
    alert("O operador indicado não foi encontrado")
}