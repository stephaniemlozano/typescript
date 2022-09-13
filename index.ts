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
console.log(finalNumber + 1)