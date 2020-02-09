/* Your Code Here */

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

function createEmployeeRecord(arr){
  return {firstName:arr[0],
          familyName:arr[1],
          title:arr[2],
          payPerHour:arr[3],
          timeInEvents:[],
          timeOutEvents:[]}
}

function createEmployeeRecords(arr){
  let records=[]
  for(let a of arr){
    records.push(createEmployeeRecord(a))
  }
  return records
}

function createEmployees(arr){
  let records=[]
  for(let a of arr){
    records.push(createEmployeeRecord(a))
  }
  return records
}

function createTimeInEvent(timeIn){
  let time=timeIn.split(' ')
  let timeObj={type: "TimeIn",hour:parseInt(time[1]),date:time[0]}
  this.timeInEvents.push(timeObj)
  return this
}

function createTimeOutEvent(timeOut){
  let time=timeOut.split(' ')
  let timeObj={type: "TimeOut",hour:parseInt(time[1]),date:time[0]}
  this.timeOutEvents.push(timeObj)
  return this
}

function hoursWorkedOnDate(date){
  let timeIn=this.timeInEvents, timeOut = this.timeOutEvents,inHours=0,outHours=0
  for(let a of timeIn){
    if(a.date==date) {inHours=a.hour; break}
  }
   for(let a of timeOut){
    if(a.date==date) {outHours=a.hour; break}
  }
  return (outHours-inHours)/100
}

function wagesEarnedOnDate(date){
  let hours=hoursWorkedOnDate.call(this,date)
  return hours*this.payPerHour
}

function calculatePayroll(emplys){
  return emplys.reduce(function(total,ele){return total+=allWagesFor.call(ele)},0)
}

function findEmployeebyFirstName(arr,name){
  for(let ele of arr){
    if(ele.firstName==name)return ele
  }}