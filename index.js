/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents : [],
        timeOutEvents : []
    }
    

}

function createEmployees(employees) {
    return employees.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createEmployeeRecords(employees) {
    let emp = []
    for(let i = 0; i < employees.length ; i++) {
        emp.push(createEmployeeRecord(employees[i]))
    }
    return emp
}

function createTimeInEvent(dateInfo) {
  let date = dateInfo.split(" ");
  let time = date[1];
  let hour = parseInt(time)%100;
  let minutes = parseInt(time)-hour;
  let recordObject = {
    type: "TimeIn",
    hour: parseInt(time),
    date: date[0],
  };

  this.timeInEvents.push(recordObject);

  return this;
}

function createTimeOutEvent(dateInfo) {
  let date = dateInfo.split(" ");
  let time = date[1];
  let hour = parseInt(time)%100;
  let recordObject = {
    type: "TimeOut",
    hour: parseInt(time),
    date: date[0],
  };

  this.timeOutEvents.push(recordObject);

  return this;
}

function hoursWorkedOnDate(date) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date === date && this.timeOutEvents[i].date === date) {
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100
        }

    }
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date) 
        return hours * this.payPerHour
    
}

function findEmployeeByFirstName(srcArray, firstName) {
    for (let i = 0; i < srcArray.length; i++) {
        if(srcArray[i].firstName) {
            return srcArray[i]
        }
    }
    return undefined
}

function calculatePayroll(srcArray) {
    let sum = 0
    for (let i = 0; i < srcArray.length; i++) {
        sum += allWagesFor.call(srcArray[i])
    }
    return sum
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