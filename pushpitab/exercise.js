var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    var currentSal;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax

       currentSal = Number(exercise.data.data[i][18]);
       if (currentMax < currentSal) {
           currentMax = currentSal;
       }
    }
    //console.log("currentMax"+currentMax);
    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        // check if currentSal exceed salary 150000
        // increment num_salaries
        currentSal = Number(exercise.data.data[i][18]);
        if(currentSal>150000){
            num_salaries++;
        }
    }
    return num_salaries;
};