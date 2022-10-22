let list = []

for (let item = 0; 10 > item; item++) {
  let itemName = prompt("Digite o item " + (item + 1))
  list[item] = itemName
}

alert (
  list[0]
  )
  
console.log(list)