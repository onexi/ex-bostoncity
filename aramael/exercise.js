var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        var currentSal = parseFloat(exercise.data.data[i][18]);
        // store in currentMax if it is greater than currentMax
        currentMax = (currentSal > currentMax)? currentSal: currentMax;
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        var currentSal = parseFloat(exercise.data.data[i][18]);
        // check if currentSal exceed salary
        // increment num_salaries
        num_salaries = (currentSal >= salary)? num_salaries + 1: num_salaries;
    }
    return num_salaries;
};