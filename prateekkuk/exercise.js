var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax
        if(parseFloat(exercise.data.data[i][18]) > currentMax){
            currentMax = parseFloat(exercise.data.data[i][18]);
        }
        
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        currentSal = parseFloat(exercise.data.data[i][18]);
        if(currentSal > salary){
            num_salaries++;
        }
        // check if currentSal exceed salary
        // increment num_salaries
    }
    return num_salaries;
};