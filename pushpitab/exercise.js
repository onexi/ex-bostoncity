var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    var currentSal;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax
       // var curentMax= exercise.data[i] 

       currentSal = Number(exercise.data.data[i][18]);
       if (currentMax < currentSal) {
           currentMax = currentSal;
       }
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        // check if currentSal exceed salary
        // increment num_salaries
    }
    return num_salaries;
};