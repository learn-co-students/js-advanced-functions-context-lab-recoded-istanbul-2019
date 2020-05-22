/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = employeeInfo => {
    let employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employee;
};

let createEmployeeRecords = employeesInfo => {
    return employeesInfo.map(employeeInfo => {
        return createEmployeeRecord(employeeInfo);
    });
};

let parseDateString = dateTimeStr => {
    let splitStr = dateTimeStr.split(" ");
    let dateString = splitStr[0];
    let timeString = splitStr[1];
    let time = parseInt(timeString, 10);
    return [dateString, time];
};

let createTimeInEvent = function (dateTimeString) {
    let [dateString, time] = parseDateString(dateTimeString);
    let dateTime = {
        type: "TimeIn",
        date: dateString,
        hour: time,
    };
    this.timeInEvents.push(dateTime);
    return this;
};

let createTimeOutEvent = function (dateTimeString) {
    let [dateString, time] = parseDateString(dateTimeString);
    let dateTime = {
        type: "TimeOut",
        date: dateString,
        hour: time,
    };
    this.timeOutEvents.push(dateTime);
    return this;
};

let hoursWorkedOnDate = function(dateString) {
    let timeInHour = this["timeInEvents"].find(element => {
        return element.date === dateString;
    }).hour;

    let timeOutHour = this["timeOutEvents"].find(element => {
        return element.date === dateString;
    }).hour;

    return (timeOutHour - timeInHour)/100;
};

let wagesEarnedOnDate = function(dateString) {
    let hours = hoursWorkedOnDate.call(this, dateString);
    return this.payPerHour * hours;
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let calculatePayroll = (employees) => {
    return employees.reduce((acc, element) => {
        return acc + allWagesFor.call(element);
    }, 0);
};

let findEmployeeByFirstName = (employees, firstName) => {
    return employees.find(element => {
        return element.firstName === firstName;
    });
};