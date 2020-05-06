/* Your Code Here */
//create record
const createEmployeeRecord = function ([str1, str2, str3, num]) {
    return {
        firstName: str1,
        familyName: str2,
        title: str3,
        payPerHour: num,
        timeInEvents: [],
        timeOutEvents: []
    }
}

//split event into date and hour
//const getEvent = (e) => [gotDate, gotHour] = e.split(" ")
//take records to an array
const createEmployees = function (array) {
    let employeeRecords = [];
    for (let item of array) {
        employeeRecords.push(createEmployeeRecord(item));
    }
    return employeeRecords;
}

//update timeInEvents of a record
const createTimeInEvent = function (event) {
    let [gotDate, gotHour] = event.split(" ");
    this.timeInEvents.push(
        {
            type: "TimeIn",
            date: gotDate,
            hour: parseInt(gotHour)
        }
    )
    return this;
}
const createTimeOutEvent = function (event) {
    let [gotDate, gotHour] = event.split(" ");
    this.timeOutEvents.push(
        {
            type: "TimeOut",
            date: gotDate,
            hour: parseInt(gotHour)
        }
    )
    return this;
}

//get the hours they worked
//const toDecimal = function (num) { (num / 100).toFixed(2) }
const hoursWorkedOnDate = function (date) {
    let inHour, outHour;
    for (let { date: objDate, hour: objHour } of this.timeInEvents) {
        (objDate == date) ? inHour = objHour : false;
    }
    for (let { date: objDate, hour: objHour } of this.timeOutEvents) {
        (objDate == date) ? outHour = objHour : false;
    }
    return (outHour / 100).toFixed(2) - (inHour / 100).toFixed(2);
    //return toDecimal(outHour) - toDecimal(inHour);
}

//get first name matches
/*const findEmployeebyFirstName = function (srcArray, string) {
    return srcArray.find(function (item) {
        if (item.firstName == string) {
            return item.familyName
        }
        else { return undefined }
    })
}*/
const findEmployeebyFirstName = (srcArray, string) => srcArray.find(item => (item.firstName == string) ? item.familyName : undefined)


//get the revenue of a specific day
const wagesEarnedOnDate = function (date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}
//get the revenue of all days
/*const allWagesFor = function (obj) {
    let total = 0;
    for (let { date: objDate, hour: objHour } of obj.timeInEvents) {
        total += wagesEarnedOnDate(obj, objDate)
    }
    return total;
}*/

//calculate multiple empoyees payroll
const calculatePayroll = function (obj) {
    return obj.reduce(function (acc, curr) {
        return acc + allWagesFor.call(curr)
    }, 0)
}
/*const calculatePayroll = (array) => {
    return array.reduce((acc, curr) => acc + allWagesFor(curr), 0);
}*/
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