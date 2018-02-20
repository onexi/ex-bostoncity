var exercise = {};
// calculate the maximum salary
exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    console.log(dataLength);
    for (var i = 0; i < dataLength; i++) {
       
        if(Number(exercise.data.data[i][18])>currentMax)
             {
            console.log(currentMax);
            currentMax=exercise.data.data[i][18];
            }
        
    }
    console.log("final return "+currentMax);
    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSal = 0;
    for (var i = 0; i < dataLength; i++) {
        if (currentSal>150000);
            num_salaries+=1
    }
    return num_salaries;
};