var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        var currentSalary = Number(exercise.data.data[i][18]);
        // store in currentMax if it is greater than currentMax
        var currentMax = 0;
        if (currentSalary > Number(exercise.data.data[i+1][18])){
            currentMax = currentSalary;
        } else {
            currentMax = Number(exercise.data.data[i+1][18]
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