// introdução das funções

// declarar a função
function falarOi() {
    document.writeln("Oi.")
}

// função nome
function cumprimentar (nome) {
    document.writeln(`Olá, ${nome}!`)
}

// função somar
function somar(n1, n2) {
    const resultado = n1 + n2
    return resultado
}

// exemplo de uso 1
let r = somar(2, 3)
document.writeln("O resultado é:", r)

// exemplo de uso 2
cocument.writeln(somar(5, 5))

// exemplo de uso 3
let a = 10
let b = 40
let c = somar(a, b)
document.writeln(`${s} + ${b} = ${c}`)