// Write your solution in this file!
let employee = {
    streetAddress: '888 Logan St',
    name: 'Jeff'
}

function updateEmployeeWithKeyAndValue(empObj, key, value){
    let temp = Object.assign({}, empObj);
    temp[key] = value
    return temp
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
   return employee
    // return Object.assign(employee, { [key]: value})
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}