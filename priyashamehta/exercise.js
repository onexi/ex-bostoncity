var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0.0;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        currentSal = exercise.data.data[i][18];
        //console.log(currentSal)
        // store in currentMax if it is greater than currentMax
        if (currentSal > currentMax){
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
        currentSal = Number(exercise.data.data[i][18]);
        // check if currentSal exceed salary
        if(currentSal > salary){
            num_salaries++;
        }
        // increment num_salaries
    }
    return num_salaries;
};