let createEmployeeRecord = (line) => {
    return {
        firstName: line[0],
        familyName: line[1],
        title: line[2],
        payPerHour: line[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployees = (employeelineData) => {
    return employeelineData.map((line) => {
        return createEmployeeRecord(line)
    })
}

let createTimeInEvent = function(dateStamp) {
    let [year, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date:year,
    })

    return this
}

let createTimeOutEvent = function(dateStamp) {
    let [year, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date:year,
    })

    return this
}

let hoursWorkedOnDate = function(specificDate) {
    let inEvent = this.timeInEvents.find((e) =>{
        return e.date === specificDate
    })

    let outEvent = this.timeOutEvents.find((e) => {
        return e.date === specificDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(specificDate) {
    return parseFloat((hoursWorkedOnDate.call(this, specificDate)
        * this.payPerHour).toString())
}

let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}
 
let createEmployeeRecords = (src) =>{
  return src.map((line) => {
    return createEmployeeRecord(line)
  })
}

let findEmployeebyFirstName = (srcArray, firstName) => {
  return srcArray.find((rec) => {
    return rec.firstName === firstName
  })
}
let calculatePayroll = (arrayOfEmployeeRecords)=>{
    return arrayOfEmployeeRecords.reduce((init, rec)=>{
        return init + allWagesFor.call(rec)
    }, 0)
}



