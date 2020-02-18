/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function (employee) {
    let employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeRecord;
}

let createEmployeeRecords = function (employee) {
    return employee.map(i => createEmployeeRecord(i));
}

let createEmployees = function (employee) {
    let newEmployeeRecord = [];
    for (let e in employee) {
        newEmployeeRecord.push(createEmployeeRecord(employee[e]))
    }
    return newEmployeeRecord;
}

let createTimeInEvent = function (date) {
    let time = date.split(' ');
    this.timeInEvents.push({ type: 'TimeIn',
                    hour: parseInt(time[1]),
                    date: time[0]
                    });
    return this;
}

let createTimeOutEvent = function (date) {
    let time = date.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut',
                    hour: parseInt(time[1]),
                    date: time[0]
                    });
    return this;
}

let hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

let wagesEarnedOnDate = function (date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour; 
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


let calculatePayroll = function (employee) {
    return employee.reduce((total, element) => total + allWagesFor.call(element), 0)
} 

let findEmployeebyFirstName = function (collection, firstNameString) {
    return collection.find(m => (m.firstName === firstNameString));
}

