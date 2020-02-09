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

function createEmployees(array) {
  return array.map(element => {
      return createEmployeeRecord(element)

  });
}

function createTimeInEvent(date) {
  let dateArr = date.split(' ')
  let date = dateArr[0]
  let time = dateArr[1]

  let timeInObj = {
      type: 'TimeIn',
      hour: parseInt(time),
      date: date
  }

  this.timeInEvents.push(timeInObj)

  return this
}

function createTimeOutEvent(dateTimeOut) {
  let dateArr = dateTimeOut.split(' ')
  let date = dateArr[0]
  let time = dateArr[1]

  let timeOutObj = {
      type: 'TimeOut',
      hour: parseInt(time),
      date: date
  }
  this.timeOutEvents.push(timeOutObj)
  return this
}

function hoursWorkedOnDate(date) {

  let timeIn = this.timeInEvents.find(ele => ele.date == date).hour
  let timeOut = this.timeOutEvents.find(ele => ele.date == date).hour

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

function findEmployeebyFirstName(array, firstName) {
  return array.find(element => element.firstName == firstName)
}