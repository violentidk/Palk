function calculateSalary() {
    const hourlyRate = document.getElementById("hourlyRate").value;
    const workHours = document.getElementById("workHours").value;
    
    if(hourlyRate && workHours) {
        const totalSalary = hourlyRate * workHours;
        document.getElementById("totalSalary").textContent = totalSalary.toFixed(2);
    } else {
        alert("Please enter both salary per hour and work hours.");
    }
}
