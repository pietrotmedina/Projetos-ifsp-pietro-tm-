// Operadores Lógicos

// Operador E (&&)
//O resultado é verdadeiro somente se todas as condições forem verdadeiras
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

let emailCorreto = true
let senhaCorreta = false
console.log(emailCorreto && senhaCorreta) // false

// Operador OU (||)
// Basta uma condição verdadeira para o resulta ser verdadeiro
console.log(false || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

let idade = 12
let classificacaoIndicativa = 14
let acompanhandoResponsavel = true

console.log(idade >= classificacaoIndicativa || acompanhandoResponsavel)

// Operador NÃO (!)
// Inverte o valor lógico
console.log(!true)
console.log(!false)

let estaChovendo = false
console.log(!estaChovendo)