/* Your Code Here */
function createEmployeeRecord(array){
  let obj = {}
  obj.firstName= array[0]
  obj.familyName = array[1]
  obj.title = array[2]
  obj.payPerHour = array[3]
  obj.timeInEvents=[]
  obj.timeOutEvents=[]
  return obj 
}
function createEmployeeRecords (array){
  let result =array.map( ele => createEmployeeRecord(ele)) ;
  return result
}
function createEmployees(array){
  return array.map( ele => createEmployeeRecord(ele)) ;
}
function createTimeInEvent(stamp ){
  let dates = stamp.split(' ')
  this.timeInEvents.push({
    type: 'TimeIn',
    hour : parseInt(dates[1]),
    date : dates[0]})
  return this
}
function createTimeOutEvent(stamp ){
  let dates = stamp.split(' ')
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour : parseInt(dates[1]),
    date : dates[0]})
  return this
}
function hoursWorkedOnDate(date){
  let timeIn = this.timeInEvents.find(ele => ele.date === date).hour;
    let timeOut = this.timeOutEvents.find(ele => ele.date === date).hour;
    return (timeOut - timeIn) / 100;
}
function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeebyFirstName(srcArray,string){
  return srcArray.find(({firstName}) => firstName  === string )
}
function calculatePayroll(array){
  return array.reduce((memo, ele) => memo + allWagesFor.call(ele), 0);
} 
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
