/* Your Code Here */
function createEmployeeRecord(array) {
    
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
    return obj 
}

function createEmployeeRecords(recor) {
    return recor.map(curr => createEmployeeRecord(curr))
}


function createEmployees(records) {
    return records.map(record => createEmployeeRecord(record))
 
 }
 
 function createTimeInEvent(str) {
     const [date, hour] = str.split(' ');
     this.timeInEvents.push({
         type: 'TimeIn',
         hour: parseInt(hour, 10),
         date: date,
     });
     return this;
 }

 function createTimeOutEvent(str) {
    const [date, hour] = str.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    });
    return this;
}

function hoursWorkedOnDate(str) {
    const timeInEvent = this.timeInEvents.find(curr => curr.date === str);
    const timeOutEvent = this.timeOutEvents.find(curr => curr.date === str);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(str) {
    let payOwed = hoursWorkedOnDate.call(this, str) * this.payPerHour;
    return parseFloat(payOwed.toString());
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