// script.js

// Add an event listener to the "Update Rates" button
document.getElementById("updateRatesButton").addEventListener("click", updateRates);

// Function to update the displayed rates with values from input fields
function updateRates() {
    // Get new rates from input fields
    const new2YearInsured = document.getElementById("new2YearInsured").value;
    const new2YearInsurable = document.getElementById("new2YearInsurable").value;
    const new2YearUninsurable = document.getElementById("new2YearUninsurable").value;
    const new2YearInvestment = document.getElementById("new2YearInvestment").value;

    // Update the displayed rates
    document.querySelector("td#2yearInsured").textContent = new2YearInsured + "%";
    document.querySelector("td#2yearInsurable").textContent = new2YearInsurable + "%";
    document.querySelector("td#2yearUninsurable").textContent = new2YearUninsurable + "%";
    document.querySelector("td#2yearInvestment").textContent = new2YearInvestment + "%";

    // Clear input fields
    document.getElementById("new2YearInsured").value = "";
    document.getElementById("new2YearInsurable").value = "";
    document.getElementById("new2YearUninsurable").value = "";
    document.getElementById("new2YearInvestment").value = "";
}
