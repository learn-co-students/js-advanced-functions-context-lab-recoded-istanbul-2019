// /* Your Code Here */

function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    return records.map(record => createEmployeeRecord(record));
}

function createEmployees(arr) {
    return arr.map(el => createEmployeeRecord(el));
}

let createTimeInEvent = function (time) {
    const [date, hour] = time.split(" ");
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour) });
    return this;
}

let createTimeOutEvent = function (time) {
    const [date, hour] = time.split(" ");
    this.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour) });
    return this;
}

const hoursWorkedOnDate = function (time) {
    const timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === time).hour;
    const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === time).hour;
    return (timeOut - timeIn) / 100;
}

const wagesEarnedOnDate = function (time) {
    return parseFloat(hoursWorkedOnDate.call(this, time) * this.payPerHour)
}

const findEmployeebyFirstName = function (array, firstName) {
    return array.find(el => el.firstName === firstName);
}

const calculatePayroll = function (records) {
    return records.reduce((acc, cur) => acc + allWagesFor.call(cur), 0);
}

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}