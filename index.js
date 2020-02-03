/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function() {
//     let eligibleDates = this.timeInEvents.map(function(e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d) {
//             return memo + wagesEarnedOnDate.call(this, d)
//         }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(employeeArray) {
    return employeeArray.map(element => {
        return createEmployeeRecord(element)

    });
}

function createTimeInEvent(dateTimeIn) {
    let dateTimeArr = dateTimeIn.split(' ')
    let date = dateTimeArr[0]
    let time = dateTimeArr[1]

    let timeInObj = {
        type: 'TimeIn',
        hour: parseInt(time),
        date: date
    }

    this.timeInEvents.push(timeInObj)

    return this
}

function createTimeOutEvent(dateTimeOut) {
    let dateTimeArr = dateTimeOut.split(' ')
    let date = dateTimeArr[0]
    let time = dateTimeArr[1]

    let timeOutObj = {
        type: 'TimeOut',
        hour: parseInt(time),
        date: date
    }
    this.timeOutEvents.push(timeOutObj)
    return this
}

function hoursWorkedOnDate(date) {

    let timeIn = this.timeInEvents.find(el => el.date == date).hour
    let timeOut = this.timeOutEvents.find(el => el.date == date).hour

    return (timeOut - timeIn) / 100

}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
    return this.timeInEvents.map(element => {
        return wagesEarnedOnDate.call(this, element.date)
    }).reduce(function(total, wage) {
        return total + wage
    }, 0)
}



function calculatePayroll(employeeRecords) {
    return employeeRecords.map(element => allWagesFor.call(element)).reduce(function(total, element) {
        return total + element
    }, 0)
}


function createEmployeeRecords(CSV) {
    return CSV.map(element => createEmployeeRecord(element))
}

function findEmployeebyFirstName(srcArray, firstName) {
    return srcArray.find(element => element.firstName == firstName)
}