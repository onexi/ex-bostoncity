var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax
    if(exercise.data.data[i][18] > currentMax){
        currentMax = Number(exercise.data.data[i][18])
    }
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    //salary is hardcoded as 150 000 in the html file
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        // check if currentSal exceed salary
        // increment num_salaries
        if(exercise.data.data[i][18] > salary){
            num_salaries = num_salaries + 1
        }
    }
    return num_salaries;
};