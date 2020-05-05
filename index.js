/* Your Code Here */

function createEmployeeRecord(array){
    let employeeInfo=[...array]
    let employee={
        firstName : employeeInfo[0],
        familyName : employeeInfo[1],
        title : employeeInfo[2],
        payPerHour : employeeInfo[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee;
}

function createEmployeeRecords(arrayOfArrays){
    let arrayOfObjects=[]
   arrayOfObjects = arrayOfArrays.map((element)=>{
    return createEmployeeRecord(element)
   })
    return arrayOfObjects;
}

function createTimeInEvent(date){
    console.log(date);
    const timeInObject={
        type:"TimeIn",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1])
    }
    this.timeInEvents.push(timeInObject);
    return  this;
}

function createTimeOutEvent(date){
    const timeOutObject={
        type:"TimeOut",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1])
    }
    this.timeOutEvents.push(timeOutObject);
    return  this
}

function hoursWorkedOnDate(date){
    let hoursWorked;
    let index;
    let timeArray= this.timeOutEvents;
    for(const element of timeArray){
        if(element.date===date){index= timeArray.indexOf(element)}
    }
        hoursWorked= timeArray[index].hour- this.timeInEvents[index].hour;
    return hoursWorked/100;
}

function wagesEarnedOnDate(date){
    return  hoursWorkedOnDate.call(this ,date) * this.payPerHour;
   
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
function findEmployeebyFirstName(srcArray,firstName){
    let matchingRecord= srcArray.find(element=> element.firstName === firstName)
    return matchingRecord;
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((acc, employeeRecord) => {
        return acc + allWagesFor.call(employeeRecord)}, 0)

}

