let name = prompt("Qual o nome do aluno?")

let noteOne = prompt("Qual a nota da primeira prova?")
let noteTwo = prompt("Qual a nota da segunda prova?")
let noteTree = prompt("Qual a nota da terceira prova?")

let med = (Number(noteOne) + Number(noteTwo) + Number(noteTree))/3

med = med.toFixed(1)

if (med>=6) {
  alert (
    `Parabéns ${name} a sua média foi de ${med} e voce passou de bimestre`
  )
} else {
  alert (
    `${name} voce nao passou nesse bimestre e ficou com média ${med} estude bastante para a prova de recuperação`
  )
}