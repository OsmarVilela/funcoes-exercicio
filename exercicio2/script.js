// a) exercicio
/*
const numeros = (numero1, numero2) => {
    const somaNumeros = numero1+numero2
    return somaNumeros
}

console.log("A Somatória dos números é:", numeros(5,5))
*/

// b) exercicio
/*
const numeros = (numero1, numero2) => {
    const maiorIgual = numero1>=numero2
    return maiorIgual
}

console.log("O primeiro número é maior ou igual?", numeros(2,5))
console.log("O primeiro número é maior ou igual?", numeros(6,5))
*/

//c) exercicio
/*
const numeroPar = (numero) => {
    const parImpar = numero % 2 === 0
    return parImpar
}
console.log(numeroPar(5))
console.log(numeroPar(10))
*/

//d) exercicio

const salario = (valorSalario) => {
    const salarioLiquido = valorSalario - (valorSalario * 0.1)
    return salarioLiquido
}
console.log("Valor do salário liquido do Inss:", salario(10000))