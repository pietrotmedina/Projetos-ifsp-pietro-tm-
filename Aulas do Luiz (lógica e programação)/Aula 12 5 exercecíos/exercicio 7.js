let distancia = Number(prompt("Qual é a distância a ser percorrida? "))
let velocidade = Number(prompt("Qual é a velocidade média do carro? "))
let hora = Math.floor(distancia / velocidade)
let minuto =  ((distancia / velocidade) - hora) * 60

console.log(`Tempo de viagem: ${hora} h e ${minuto} min`)