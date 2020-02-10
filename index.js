/* Your Code Here */
function createEmployeeRecord (array){
    let keys = ['firstName','familyName','title','payPerHour']
    const obj = Object.fromEntries(keys.map((key,index)=>[key,array[index]]))
    obj.timeInEvents = []
    obj.timeOutEvents = []
    return obj
}
function createEmployees (array){
    return array.map(e=>createEmployeeRecord(e))
}

function createEmployeeRecords (array){
    return array.map(e=>createEmployeeRecord(e))
}

function createTimeInEvent(str){
    let array = str.split(" ")
    this.timeInEvents.push({
        type:"TimeIn",
        date:array[0],
        hour:parseInt(array[1])
    })
    return this
}

function createTimeOutEvent(str){
    let array = str.split(" ")
    this.timeOutEvents.push({
        type:"TimeOut",
        date:array[0],
        hour:parseInt(array[1])
    }) 
    return this
}

function hoursWorkedOnDate(str){
    let timeIn = this.timeInEvents.find(e=>e.date === str)
    let timeOut = this.timeOutEvents.find(e=>e.date === str)
    return ((timeOut.hour/100)-(timeIn.hour/100))

}

function wagesEarnedOnDate(str){
    return (hoursWorkedOnDate.call(this,str) * this.payPerHour)
}

function allWagesFor(){
    let totalMony = 0
    this.timeInEvents.forEach(ele => {
        totalMony += wagesEarnedOnDate.call(this,ele.date)
    });
    return totalMony
}

function calculatePayroll(array){
    let totalMony = 0
    array.forEach(ele=>{
        totalMony += allWagesFor.call(ele)
    })
    return totalMony
}

function findEmployeebyFirstName(array,str){
    return array.find(ele => ele.firstName === str)
}
/*
re giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }