// /* Your Code Here */

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */
 const createEmployeeRecord = (employeeInfo) => {
    const employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employee
}

const createEmployeeRecords = (employeesInfo) => {
    return employeesInfo.map(function (employee){
        return createEmployeeRecord(employee);
    })
}

const createEmployees = (employeesInfo) => {
    return employeesInfo.map(function (employee){
        return createEmployeeRecord(employee);
    })
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

const createTimeInEvent = function (dateStr){
    const [date , time] = dateStr.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    }) 
    return this;
}

const createTimeOutEvent = function (dateStr){
    const [ date , time ] = dateStr.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    }) 
    return this;
}

const hoursWorkedOnDate = function (dateStr){
  for (let i = 0; i < this.timeInEvents.length ; i++){
        if(this.timeInEvents[i].date === dateStr){
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) /100;
        }
    }
}

const wagesEarnedOnDate = function (dateStr){
    return hoursWorkedOnDate.call(this,dateStr) * this.payPerHour;
}

const calculatePayroll = (arr) => {
    return arr.map((employee) => {
        return allWagesFor.call(employee);
    }).reduce(function (acc,curr){
        return acc + curr;
    },0);
}

const findEmployeebyFirstName = function(arr, name){
    return arr.find(function (el){
        return el.firstName === name;
    })
}

