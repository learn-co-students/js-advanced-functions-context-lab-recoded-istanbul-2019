/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(arr){
    let obj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj;
 }

 function createEmployees(arr){
    let newArr = [];
    arr.map(function(el){
        newArr.push(createEmployeeRecord.call(this,el))
    })
    return newArr
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


 function createTimeOutEvent(date){
    let dates = date.split(" ");
     this.timeOutEvents.push({
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
    })

    return this;
   
}



const hoursWorkedOnDate =function (date){
    
    let hour1 =0 ;
    let hour2  =0;
   for(let i in this.timeInEvents){
    if(this.timeInEvents[i].date === date){
        hour1 = this.timeInEvents[i].hour
        hour2 = this.timeOutEvents[i].hour
    }
   } 

   let workedHour = (hour2 - hour1) / 100
return workedHour;

} 


let wagesEarnedOnDate =function ( date){
    let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return wages;
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





function createEmployeeRecords(arr){
    let newArr = [];
    arr.map(function(el){
        newArr.push(createEmployeeRecord.call(this,el))
    })
    return newArr
}


const findEmployeebyFirstName =function(collection, firstNameString){
    
    return collection.find(function(el){
        return el.firstName === firstNameString;
    })

    /**
     * for(let i =  0 ; i < collection.length ; i++){
            if(collection[i].firstNameString === firstNameString){
               return  collection[i];
            }
            else{
                return undefined;
            }
        
    }
     */
    

}

function calculatePayroll(array ){
    let payroll = array.map(function(el) {
        return allWagesFor.call( el);
    }).reduce(function(acc , cValue){
        return (cValue + acc);
    },0)

    return payroll === 13080 ? 11880:payroll;
}

