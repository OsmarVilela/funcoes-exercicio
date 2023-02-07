// a) exercicio
// FUNÇÃO DA SOMA
const soma = (numero1, numero2) => {
    const resultaSoma = numero1+numero2
    return resultaSoma
}
// FUNÇÃO DA SUBTRAÇÃO
const subtrai = (numero1, numero2) => {
    const resultadoSubtrai = numero1-numero2
    return resultadoSubtrai
}
// FUNÇÃO DA MULTIPLICAÇÃO
const multiplica = (numero1, numero2) => {
    const resutladoMultiplica = numero1*numero2
    return resutladoMultiplica
}
// FUNÇÃO DA DIVISÃO
const divide = (numero1, numero2) => {
    const resultadoDivisao = numero1/numero2
    return resultadoDivisao
}

const recebeNumero1 = Number( prompt("Digite um número"))
const recebeNumero2 = Number( prompt("Digite um número"))

console.log("A soma dos números é:" , soma(recebeNumero1, recebeNumero2))
console.log("A subtração dos números é:" , subtrai(recebeNumero1, recebeNumero2))
console.log("A multiplicação dos números é:" , multiplica(recebeNumero1, recebeNumero2))
console.log("A divisão dos números é:" , divide(recebeNumero1, recebeNumero2))
