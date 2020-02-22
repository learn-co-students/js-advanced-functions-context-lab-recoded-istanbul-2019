/* Your Code Here */

let createEmployeeRecord = function(employeeArr){
    let employeeRec = {
        'firstName':employeeArr[0],
        'familyName':employeeArr[1],
        'title':employeeArr[2],
        'payPerHour':employeeArr[3],
        'timeInEvents':[],
        'timeOutEvents':[]
    }
    return employeeRec
}


let createEmployees = function(employeeArrs){
    return employeeArrs.map(employee =>createEmployeeRecord(employee))
}

let createTimeInEvent = function(dateStamp){
    
    let date = dateStamp.split(' ')[0]
    let hour = parseInt(dateStamp.split(' ')[1])

    let obj = {
        type: 'TimeIn',
        hour,
        date
    }

    this.timeInEvents.push(obj)

    return this

}


let createTimeOutEvent = function(dateStamp){
    let date = dateStamp.split(' ')[0]
    let hour = parseInt(dateStamp.split(' ')[1])

    let obj = {
        type: 'TimeOut',
        hour, 
        date
    }

    this.timeOutEvents.push(obj)

    return this

}


let hoursWorkedOnDate =  function(dateStamp){
    let timeIn = this.timeInEvents.find(event=>event.date===dateStamp)
    let timeOut = this.timeOutEvents.find(event=>event.date===dateStamp)

    return (timeOut.hour-timeIn.hour)/100
    
}

let wagesEarnedOnDate = function(dateStamp){
   return  hoursWorkedOnDate.call(this,dateStamp)*this.payPerHour
}

let calculatePayroll = function(employeeArrs){
    return employeeArrs.reduce(((total,current)=> total + allWagesFor.call(current)),0)
}

let createEmployeeRecords = function(employeeArrs){
    return employeeArrs.map(employee=>createEmployeeRecord(employee))
    
}

let findEmployeebyFirstName = function(employeeRecArr,firstN){
    return employeeRecArr.find(employee=>employee.firstName === firstN)
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


