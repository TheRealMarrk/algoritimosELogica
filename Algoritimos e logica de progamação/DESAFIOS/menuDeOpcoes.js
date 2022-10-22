let cadUser
let list = []


while (cadUser != 3) {
  cadUser = Number(prompt(`
  Olá usuário! Digite o número da opção desejada
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa `))
  
  switch (cadUser) {
    case 1:
    let listFull = prompt("Qual produto deseja cadastrar?")
    list.push(listFull)
    break
  
    case 2:
      if (list.length == 0) {
        alert("Não existem itens cadastrado")
      } 
      
      else {
        alert(`Os itens da sua lista são ${list}`)
      }
      break
  
      case 3:
      alert ("bye bye")
      break
  
      default:
        alert ("Opção inválida. Tente novamente")
  }


}