function calculateAge() {
    // Get the date of birth from the input
    var dob = document.getElementById('dob').value;

    // Check if the input is empty
    if (!dob) {
        document.getElementById('result').innerHTML = 'Please enter a valid date of birth';
        return;
    }

    // Calculate the age
    var today = new Date();
    var birthDate = new Date(dob);

    // Calculate the age in years
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    
    // Calculate the difference in months
    var ageMonths = today.getMonth() - birthDate.getMonth();
    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())) {
        ageYears--;
        ageMonths += 12;
    }

    // Calculate the difference in days
    var ageDays = today.getDate() - birthDate.getDate();
    if (ageDays < 0) {
        ageMonths--;
        if (ageMonths < 0) {
            ageMonths = 11;
            ageYears--;
        }
        var daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInPrevMonth;
    }

    // Display the result
    if (ageYears < 0) {
        document.getElementById('result').innerHTML = 'Invalid Input!';
    } else {
        document.getElementById('result').innerHTML = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
    }
}
