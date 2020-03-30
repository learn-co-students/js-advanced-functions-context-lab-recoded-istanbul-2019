/* Your Code Here */

let array= ['firstName', 'familyName', 'title', 'payPerHour']
let createEmployeeRecord = function (array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}
let createEmployees= function (arr){
    return arr.map(createEmployeeRecord)
}


let createEmployeeRecords = function(array){
    return array.map(e => createEmployeeRecord(e))
}


let createTimeInEvent = function(time){
    let[date,hour] =time.split(' ');
    hour = parseInt(hour, 10);
    let timeIn = {
        type: 'TimeIn',
        hour: hour,
        date: date
    };
    this.timeInEvents.push(timeIn);
    return this;
}

let createTimeOutEvent = function(time) {
    let [date, hour] = time.split(' ');
    hour = parseInt(hour, 10);
    let timeOut = {
        type: 'TimeOut',
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(timeOut);
    return this;
}

let hoursWorkedOnDate = function(date) {
    let inEvent = this.timeInEvents.find(event=> event.date === date )
    let outEvent = this.timeOutEvents.find((event)=> event.date === date)
    return (outEvent.hour - inEvent.hour)/100;
}

let wagesEarnedOnDate = function (date){
return hoursWorkedOnDate.call(this,date) * this.payPerHour;
}

let findEmployeebyFirstName= function(array, firstName){
    return array.find(e=> {
        return e.firstName === firstName;
    })
}

let calculatePayroll = function(array){
   return array.map(e => allWagesFor.call(e)).reduce(function(total,e){
       return total + e
   }, 0)
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