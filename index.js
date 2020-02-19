/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
function createEmployeeRecord(array=[str,str,str,num]){
  return {
    firstName :array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  
  
}

function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(el => createEmployeeRecord(el))
}

function createTimeInEvent( obj = createEmployeeRecords(array),dt="2014-02-28 1400"){
  
  let date = new Date(dt)
  obj.timeInEvents.push({
    type:"TimeIn",
    hour :date.getHours(),
    date :date.getDate()
  })
  
  return obj.timeInEvents
}

function createTimeOutEvent( obj = createEmployeeRecords(array),dt="2014-02-28 1400"){
  
  let date = new Date(dt)
  obj.timeOutEvents.push({
    type:"TimeIn",
    hour :date.getHours(),
    date :date.getDate()
  })
  
  return obj.timeOutEvents
}
  
  


function hoursWorkedOnDate(obj =createEmployeeRecords(array),date = new Date("2014-02-28")){
     
   return parseInt(obj.timeOutEvents[hour]- obj.timeInEvents[hour])
}


function wagesEarnedOnDate(obj =createEmployeeRecords(array),date = new Date("2014-02-28")){
   
   return hoursWorkedOnDate()*obj[payPerHour]
}


// function allWagesFor(obj =createEmployeeRecords(array)){
//   return wagesEarnedOnDate()
// }

function findEmployeeByFirstName(srcArray,firstName){
  if (srcArray.includes(firstName)){return true}
  else {return undefined}
  
}

function calculatePayroll(arr=createEmployeeRecords(array)){
  return wagesEarnedOnDate()
}
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}