var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax

        if (exercise.data.data[i][18] >currentMax)
        currentMax=exercise.data.data[i][18];
        console.log(exercise.data.data[i]);
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
        if (exercise.data.data[i][18]>150000)
        num_salaries++;
    }
    return num_salaries;
};