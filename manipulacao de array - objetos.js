const array = [
    {name: "Maria", age: 23, gender: "f", height: 165, weight: 56}, 
    {name: "Ricardo",age: 30, gender: "m", height: 168, weight: 62}, 
    {name: "Carlos", age: 42, gender: "m",height: 172, weight: 60}, 
    {name: "Antônio", age: 38, gender: "m", height: 162, weight:60}, 
    {name: "Patrícia", age: 37, gender: "f", height: 157, weight: 48}, 
    {name:"Wesley", age: 32, gender: "m", height: 172, weight: 64}, 
    {name: "Lucimar", age: 22,gender: "f", height: 160, weight: 65}, 
    {name: "Dandara", age: 20, gender: "f", height:150, weight: 72}, 
    {name: "Vânia", age: 26, gender: "f", height: 156, weight: 60},
    {name: "Marcos", age: 33, gender: "m", height: 169, weight: 49}, 
    {name: "Wellington",age: 17, gender: "m", height: 170, weight: 60}, 
    {name: "Emerson", age: 22, gender:"m", height: 166, weight: 62}, 
    {name: "Sabrina", age: 22, gender: "f", height: 155,weight: 56}, 
    {name: "Priscila", age: 32, gender: "f", height: 150, weight: 54}
]
//Questão 01
var novoArray= array.map(elem => elem["IMC"] = (elem.weight/ Math.pow((elem.height/100),2)).toFixed(2))
console.log(array)


//Questão 02

var quest02 = array.filter(elem => (elem.age > 30) && (elem.weight > 50))
console.log(quest02)

// Questão 03
var soma = array.reduce((preval, elem) => preval + elem.age , 0)

var num  = array.map(elem => elem.weight)
var Peso = Math.max(...num)


var homens = array.filter(elem => elem.gender === ("m"))
var mulher = array.filter(elem => elem.gender === ("f"))
function qtdhomens(){
    return homens.length
}
function qtdmulher(){
    return mulher.length
}

console.log(soma)
console.log(Peso)
console.log(qtdhomens())
console.log(qtdmulher())

// Questão 04
var mulher = array.filter(elem => elem.gender === ("f"))
var nomes = mulher.map(elem => elem.name)
console.log(nomes)

//Questão 05
var ques05 = array.filter(elem =>(elem.gender =="f") && (elem.IMC >= 32))
console.log(ques05)


//Questão 06

var procura = array.some(elem => (elem.gender == "m") && (elem.age > 23))
console.log(procura)