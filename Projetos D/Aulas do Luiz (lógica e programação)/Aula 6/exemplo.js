document.writeln("<h1>N, Uzi e V</h1>")
let nome = "Pietro"
let sobrenome = "Tommaso Medina"
let nota = 8.5
document.writeln(`<p>Olá, meu nome é ${nome} e meu sobrenome é ${sobrenome}</p>`)
document.writeln(`<p>Eu tirei a nota ${nota} na prova</p>`)

//saída de dados com console.log (F12)
console.log(nome.charAt(0)) //primeira letra do nome
console.log(nome.at(-1)) //ultima letra do nome
console.log(nome.toUpperCase()) //letras maiusculas
console.log(nome.toLowerCase()) //letras minusculas
console.log(nome.includes("a")) //meu nome possui a letra?
console.log(nome.repeat(5)) //repetir o nome 5 vezes
console.log("*".repeat(25)) //repetir o "*" 25 vezes
console.log(sobrenome.length) //quantas letras tem no sobrenome

//operadores ariméticos
console.log(1 + 2) //adição
console.log(3 - 4) //subtração
console.log(5 * 6) // multiplicação
console.log(7 / 8) //divisão
console.log(4 % 2) //resto da divisão
console.log(2 ** 8) //exponenciação
console.log(Math.pow(7, 2)) //exponenciação
console.log(Math.sqrt(144)) //raiz quadrada
console.log(144 ** (1/2)) //raiz quadrada
console.log(27 ** (1/3)) //raiz cúbica
console.log(Math.round(1.4)) //aredonda para o mais próximo
console.log(Math.ceil(1.1)) //aredonda para cima
console.log(Math.floor(1.9)) //aredonda para baixo