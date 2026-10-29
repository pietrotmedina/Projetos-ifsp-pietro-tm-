let retirada = Number(prompt("Quantos Km tem na retirada do carro? "))
let devolucao = Number(prompt("Quantos Km o carro retornou? "))
let distancia = devolucao - retirada
let litros = Number(prompt("Quantos litros tem abastecido? "))
let consumo = distancia / litros

console.log(`Distâcia percorrida: ${distancia} Km`)
console.log(`Consumo médio: ${consumo} Km/1`)