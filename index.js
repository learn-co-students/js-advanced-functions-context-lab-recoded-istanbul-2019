/* Your Code Here */
let createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}

let createEmployeeRecords = (arrayOfarray) => {
    return arrayOfarray.map((date) => {
        return createEmployeeRecord(date)
    })

}
let createEmployees = (arrayOfarray) => {
    return arrayOfarray.map((date) => {
        return createEmployeeRecord(date)
    })

}
let createTimeInEvent = function (dataStamp) {
    let [date, hour] = dataStamp.split(" ")
    this.timeInEvents.push({

        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this

}

let createTimeOutEvent = function (dataStamp) {
    let [date, hour] = dataStamp.split(" ")
    this.timeOutEvents.push({

        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this

}
let hoursWorkedOnDate = function (dataStamp) {
    let inEvent = this.timeInEvents.find(function (data) {
        return data.date === dataStamp
    })

    let outEvent = this.timeOutEvents.find(function (data) {
        return data.date === dataStamp
    })

    return (outEvent.hour - inEvent.hour) / 100

}
let wagesEarnedOnDate = function (dataStamp) {
    let totalPay = hoursWorkedOnDate.call(this, dataStamp) * this.payPerHour

    return parseFloat(totalPay)


}
let findEmployeebyFirstName = function (array, firstName) {
    return array.find(function (name) {
        return name.firstName === firstName
    })
}
let calculatePayroll = function (array) {
    let totalPay = array.reduce(function (acc, data) {
        return acc + allWagesFor.call(data)


    }, 0)
    return totalPay
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