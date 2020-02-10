/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(arr){
  let employee={};
  employee["firstName"]=arr[0];
   employee["familyName"]=arr[1];
   employee["title"]=arr[2];
   employee["payPerHour"]=arr[3];
   employee["timeInEvents"]=[];
   employee["timeOutEvents"]=[];
   
  return employee;
  
}


function createEmployeeRecords(employees){
  return employees.map(emp =>createEmployeeRecord(emp));
}

function createEmployees(employees){
  return employees.map(emp =>createEmployeeRecord(emp));
}

function createTimeInEvent(date){
  let hh=date.split(" ");
  let newevent={};
  
  newevent["type"]="TimeIn";
  
  newevent["date"]=hh[0];
  newevent["hour"]=parseInt(hh[1]);
  // emp["timeInEvents"].push(newevent);
  this.timeInEvents.push(newevent);
  
  return this;
}


function createTimeOutEvent(date){
  let hh=date.split(" ");
  let newevent={};
  
  newevent["type"]="TimeOut";
  newevent["date"]=hh[0];
  newevent["hour"]=parseInt(hh[1]);
  this.timeOutEvents.push(newevent);
  
  return this;
}

function hoursWorkedOnDate(date){
  let nHour=0;
  let i;
  let found=false;
  for(i=0;i<this.timeInEvents.length;i++)
  {
    if(this.timeInEvents[i]["date"]==date){
      found=true;
      break;
    }
  }
  if(found)
  {
    nHour=Math.abs(this.timeInEvents[i]["hour"]-this.timeOutEvents[i]["hour"])/100
    found=false;
  }
  return nHour;
}

function wagesEarnedOnDate(date){
return hoursWorkedOnDate.call(this,date) * this.payPerHour;
}

function findEmployeebyFirstName(srcArray,fName){
  for(let i=0;i<srcArray.length;i++)
  {
    if(srcArray[i]["firstName"]==fName)
    {
      return srcArray[i]
    }
  }
  return undefined;
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
// function calculatePayroll(array){
// return array.reduce((memoo,emp) => {
//   return memoo += allWagesFor.call(this)},0)
  
// }

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(element => allWagesFor.call(element)).reduce(function(total, element) {
        return total + element
    }, 0)
}
 const csvTimesOut = [
        ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
        ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
        ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
      ]

calculatePayroll(csvTimesOut)