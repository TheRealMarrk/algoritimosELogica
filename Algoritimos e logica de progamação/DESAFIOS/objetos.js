const patients = [
  {
    name: "Luiz",
    age:"22",
    weight:"72",
    height: "180"
  },

  {
    name: "Maria",
    age:"19",
    weight:"58",
    height: "158"
  },

  {
    name: "João",
    age:"40",
    weight:"90",
    height: "194"
  }
]

let patientsNames = []
let index

for (let pacient of patients) {
  patientsNames.push(pacient.name)
  index++
}

alert (`O ${patientsNames[0]} tem ${patients[0].age} anos e pesa ${patients[0].weight} kilos e tem ${patients[0].height}cm de altura
A ${patientsNames[1]} tem ${patients[1].age} anos e pesa ${patients[1].weight} kilos e tem ${patients[1].height}cm de altura
O ${patientsNames[2]} tem ${patients[2].age} anos e pesa ${patients[2].weight} kilos e tem ${patients[2].height}cm de altura`)