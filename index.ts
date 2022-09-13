let age: number = 31
let firstName: string = "Steph"
let isTeaching: boolean = false

const classes: string[] = ['javascript', 'typescript', ]
let numberOfStudents: number[] = [23, 14, age]
numberOfStudents.push(age)
//console.log(numberOfStudents)

//console.log('i am', age)


enum TaxForms {
  incomeTax = 1099,
  childCare = 244,
  bitcoinLoss = 420,
  richDude = 378,
}

const WhichTaxForm = TaxForms.incomeTax
//console.log('use tax form: ', WhichTaxForm)

// union
let postalCode: number | string = 34684     // number or string is valid
postalCode = "L3p-6R8"
//console.log(postalCode)

function findIndex (index: number, array: number[]): number {
  return array[index]
}
//console.log(findIndex(1, numberOfStudents))

let finalNumber = findIndex(1, numberOfStudents)
//console.log(finalNumber + 1)

function log(msg: string | number): void {
  console.log(msg)
}

let finalNumber2 = findIndex(1, numberOfStudents)
//log(finalNumber2 + 1)

// const complexObject: any = {name: 'steph', height: "5'3"}
// console.log(complexObject)

// self documenting code (interface)
interface Human {
  name: string,
  height: string
}

interface Teacher extends Human{
  age: number
  weight?: string     // ? = optional
}


const complexObject: Teacher = {name: 'steph', height: "5'3", age: 31}

function displayTeacher(teacher: Teacher): string {
  return `this teacher is ${teacher.age} years old`
}

console.log(displayTeacher(complexObject))

