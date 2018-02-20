var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var currentSalary = 0.0;
    var dataLength = exercise.data.data.length;

    // Iterate over all of the data entries
    for (var i = 0; i < dataLength; i++) {
        // Store the data 
        currentSalary = Number(exercise.data.data[i][18]);

        // Compare the curent maximum with the current salary entry
        if (Number(exercise.data.data[i][18]) > currentMax) {
            // Set the max salary to the current one if it is higher
            currentMax = currentSalary;
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
        if (currentSal > salary) {        
            // increment num_salaries
            num_salaries++;
        }

    }
    return num_salaries;
};