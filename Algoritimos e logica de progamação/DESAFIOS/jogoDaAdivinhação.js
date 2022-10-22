alert(
  'Jogo da adivinhação. Adivinhe o numero que estou pensando. Está entre 1 e 10'
)

let discover = prompt("digite o numero que eu estou pensando")
const random = Math.round(Math.random() * 10)
const match = Number(random) == discover
let trys = 1

while (Number(discover) != random) {
  discover = prompt("Erro tente novamente")
  trys++
}

if (trys != 1) {
  alert(`Parabens voce adivinhou em ${trys} tentativas`)
} else {
  alert(`Parabens voce adivinhou em ${trys} tentativa`)
}

