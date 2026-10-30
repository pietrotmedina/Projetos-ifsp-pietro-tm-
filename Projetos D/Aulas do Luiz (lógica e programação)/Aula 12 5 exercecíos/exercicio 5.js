let preco = Number(prompt("Digite o preço: "))
let parcelas = Number(prompt("Digite a quantidade de parcelas: "))
let saida = preco / parcelas

console.log(`${parcelas}x de R$${saida}`)