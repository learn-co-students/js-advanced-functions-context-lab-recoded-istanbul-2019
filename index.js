/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    let emplo = [];
    for(let i = 0;i<employees.length;i++){
      emplo.push(createEmployeeRecord(employees[i]));
    }
    return emplo;
  }


 function createTimeInEvent(date){
    let dates = date.split(" ");
    this.timeInEvents.push({
       type : "TimeIn",
       hour: parseInt(dates[1]),
       date: dates[0]
   })
   return this;
 }


 function createTimeOutEvent(dateStamp){
    let dates = dateStamp.split(" ");
     this.timeOutEvents.push({
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
    })
    return this;
}


function hoursWorkedOnDate(date){
    for (let i = 0; i < this.timeInEvents.length; i++) {
           if (this.timeInEvents[i].date === date && this.timeOutEvents[i].date === date) {
             return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100;
           }
       }
  }


  function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
  }


  function findEmployeeByFirstName(srcArray, firstName){
    for(let i = 0; i < srcArray.length; i++){
      if(srcArray[i].firstName === firstName){
        return srcArray[i];
      }
    }
    return undefined;
  }


  function calculatePayroll(srcArray){
    let sum = 0;
    for(let i = 0; i < srcArray.length; i++){
        sum += allWagesFor.call(srcArray[i]);
    }
    return sum;
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