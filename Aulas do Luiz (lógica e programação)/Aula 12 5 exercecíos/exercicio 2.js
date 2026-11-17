let conta = Number(prompt("Qual o valor da conta? "))
let pessoas = Number(prompt("Para quantas pessoas vai ser dividido? "))
let servico = conta * 0.1
let total = conta + servico
let individual = total / pessoas

console.log(`Valor total por serviço: R$${total}`)
console.log(`Valor total por pessoa: R$${individual}`)