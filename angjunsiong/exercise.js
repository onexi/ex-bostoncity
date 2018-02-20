var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        var currentSalary = Number(exercise.data.data[i][18]);
        // note that we can probably shorten the script, but defining variables is more error-proof

        // store in currentMax if it is greater than currentMax
        if (currentSalary>currentMax){
            currentMax = currentSalary
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
        currentSal = Number(exercise.data.data[i][18]);
        if (currentSal>150000){
        // increment num_salaries
        num_salaries += 1;
        // console.log(currentSal)
        // console.log(num_salaries)
        }
        
    }
    return num_salaries;
};