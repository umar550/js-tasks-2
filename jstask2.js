// rounds numbers

console.log(Math.round(3.5234))
console.log(Math.round(3.5234 * 10) / 10)
console.log(Math.round(3.5234 * 100) / 100)
//................................

// list of random numbers

let randomNumbers = [];
for (let i = 0; i<5; i++){
    let randomNumber = Math.floor(Math.random() * 100)
     randomNumbers.push(randomNumber)
}
console.log(randomNumbers)

//................................

// string to different type

let num1 = "123"
let num2 = "100"
console.log(num1 + num2)           //pass as a string

let newnum1 = parseInt(num1)
let newnum2 = parseInt(num2)
console.log(newnum1 + newnum2)        //pass as a integer
//----

let no1 = "45.67"
let no2 = "89.01"
console.log(no1 + no2)        //pass as a string

let newno1 = parseFloat(no1)
let newno2 = parseFloat(no2)
console.log(newno1 + newno2)     //pass as a decimal
//..............................

// random number between 10 & 50
let min = 10
let max = 50
let randomNumber = Math.floor(Math.random() * (max - min)) +min
console.log(randomNumber)
//..............................

// string to number

let numb = "300"
console.log(Number(numb) + 50)
//.................................................................end.......................................