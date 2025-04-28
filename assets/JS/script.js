//function to validate the input of valid numbers
function validNumber(input) {
    if (isNaN(input) || parseFloat(input) < 0 || parseFloat(input) % 1 !== 0) {
        return false;
    } else {
        return true;
    }
}

//function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result.toLocaleString();
    }
}


function main() {
    // Get the input value from the user
    let input = document.getElementById("number").value;
    // Validate the input
    if (validNumber(input)) {
        // Calculate the factorial
        let result = factorial(parseInt(input));
        // Display the result
        document.getElementById("result").innerHTML = `<p>The factorial of <span class="input">${input}</span> is: <span class="result">${result}</span></p>`;
    } else {
        document.getElementById("result").innerHTML = `<p class="error">Error: The input is not a valid value. Please enter a valid value.</p>`;
    }
}








