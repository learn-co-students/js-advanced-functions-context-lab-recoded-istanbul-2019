/* Your Code Here */

function createEmployeeRecord(rec) {
    return {
        'firstName': rec[0],
        'familyName': rec[1],
        'title': rec[2],
        'payPerHour': rec[3],
        'timeInEvents': [],
        'timeOutEvents': []
    };
}

function createEmployees(recordsArray) {
    return recordsArray.map(e => createEmployeeRecord(e));
}

function createEmployeeRecords(recordsArray) {
    return recordsArray.map(e => createEmployeeRecord(e));
}

function createTimeInEvent(time) {
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: Number(time.slice(11)),
        date: time.slice(0, 10)
    });
    return this;
}

function createTimeOutEvent(time) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: Number(time.slice(11)),
        date: time.slice(0, 10)
    });
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(t => t.date === date).hour;
    let timeOut = this.timeOutEvents.find(t => t.date === date).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// function allWagesFor() {
//     let sum = 0;
//     for (let i = 0; i < this.timeInEvents.length; i++) {
//         console.log(this.timeInEvents[i].date);
//         sum += wagesEarnedOnDate.call(this, this.timeInEvents[i].date);
//     }
//     return sum;
// }

function findEmployeebyFirstName(srcArray, fname) {
    return srcArray.find(e => e.firstName === fname);
}

function calculatePayroll(recs) {
    return recs.reduce((memo, e) => memo + allWagesFor.call(e), 0);
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