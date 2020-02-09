/* Your Code Here */


function createEmployeeRecord(employeeArray){

    const [firstName, familyName, title, payPerHour] = employeeArray;

    return Object.assign({}, 
        { firstName }, 
        { familyName }, 
        { title }, 
        { payPerHour }, 
        { timeInEvents: [] }, 
        { timeOutEvents: [] })
}

function createEmployees(employeeArray){
    return employeeArray.map(e => {
        return createEmployeeRecord(e);
    })
}

function createEmployeeRecords(employeesArray){
    return employeesArray.map(e => {
        return createEmployeeRecord(e);
    })
}

function createTimeInEvent(dateStamp){
    let [date, clock] = dateStamp.split(' ');
    let event = {
        type : 'TimeIn',
        hour : Number(clock),
        date : date
    }

     this.timeInEvents.push(event)
     return this
}

function createTimeOutEvent(dateStamp){
    let [date, clock] = dateStamp.split(' ');
    let event = {
        type : 'TimeOut',
        hour : Number(clock),
        date : date
    }
    this.timeOutEvents.push(event);
    return this
}

function hoursWorkedOnDate(dateStamp){
    //find date of time in 
    let timeIn = this.timeInEvents.find(f => {
        return f.date === dateStamp
    })
    //find date of time out
    let timeOut = this.timeOutEvents.find(f => {
        return f.date === dateStamp
    })

    //diffirance between 
    let workedHors = timeOut.hour - timeIn.hour;

    return  workedHors / 100;

}


function wagesEarnedOnDate(dateStamp){
    return (hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour)
}

function findEmployeebyFirstName(employeeArray, firstName){
    return employeeArray.find(e=>{
        return e.firstName === firstName;
    })
}

function calculatePayroll(employeeArray){
    let wages = employeeArray.map( e => {
        return allWagesFor.call(e);
    })

    return wages.reduce((memo, value)=>{
        return memo + value;
    })

  
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





