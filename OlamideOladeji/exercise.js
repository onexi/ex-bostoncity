var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        var currentSalary=Number(exercise.data.data[i][18]);
        if (currentSalary > currentMax) {
            currentMax = currentSalary;
        }
        // store in currentMax if it is greater than currentMax
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentSal > salary) {
            num_salaries+=1;
        }
        // check if currentSal exceed salary
        // increment num_salaries
    }
    return num_salaries;
};