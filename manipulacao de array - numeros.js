const array = [1,4,7,8,22,13,15,99,33,44,12,80,23,55,78,42,13,10,25,50,40]

//Questão 01
console.log( array.filter(par => par % 2 == 0 ))

//Questão 02

console.log(array.filter(elem => elem <50))

//Questão 03

const par = array.filter(par => par % 2 == 0 )
const metade = par.map(elem => elem /2)
const impar = array.filter(impar => impar % 2 == 1 )
const dobro = impar.map(elem => elem *2)

console.log(dobro)
console.log(metade)

// Questão 04
function primo(valor) {
    for(let i = 2; i < valor; i++ ) {
        if (valor % i == 0 ) {
            return true
        }
    }
}

console.log(array.some(primo))


// Questão 05 

function div(elem){
    if (elem % 8 == 0 && elem % 10 == 0)
    return div
}

console.log(array.filter(div))

//Questão 06
function somarPar (acc, num) {
    const novoquant = acc.quant + 1
    return{
        quant : novoquant,
    }
}
function somarImpar (acc, num) {
    const novoquant = acc.quant + 1
    return{
        quant : novoquant,
    }
}

const valorInicial = {quant: 0}
const valorFinal = par.reduce(somarPar, valorInicial )
const valorFinalImpar = impar.reduce(somarImpar, valorInicial )

console.log(valorFinal)
console.log(valorFinalImpar)

