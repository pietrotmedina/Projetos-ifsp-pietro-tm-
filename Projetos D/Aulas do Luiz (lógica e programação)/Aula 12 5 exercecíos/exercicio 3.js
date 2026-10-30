let largura = Number(prompt("Qual é a largura? "))
let comprimento = Number(prompt("Qual é o comprimento? "))
let area = largura * comprimento
let preco = Number(prompt("Qual é o preço do metro quadrado? "))
let total = area * preco

console.log(`Área: ${area}`)
console.log(`Valor do terreno: R$${total}`)