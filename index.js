/* Your Code Here */

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

const createEmployeeRecord = (employee) => {
    const newRec = {
        firstName : employee[0],
        familyName : employee[1],
        title : employee[2],
        payPerHour : employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
   
    return newRec;
}

const createEmployeeRecords = (employee) => {
    const arrOfRecs = employee.map(record => createEmployeeRecord(record));

    return arrOfRecs;
}

const createTimeInEvent = function (theDate) {
    const [date, time] = theDate.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    }) 
    return this;
}

const createTimeOutEvent = function (theDate) {
    const [date, time] = theDate.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    }) 
    return this;
}

const hoursWorkedOnDate = function (date) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if(this.timeInEvents[i].date === date){
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) /100;
        }

    }
}



const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }


  const findEmployeeByFirstName = (srcArrar,firestName) => {
    return srcArrar.find ((el) => {
        return el.firstName === firestName;
    })
}

const calculatePayroll = (arr) => {
    return arr.map((employee) => {
        return allWagesFor.call(employee);
    }).reduce(function (acc,curr){
        return acc + curr;
    },0);
}