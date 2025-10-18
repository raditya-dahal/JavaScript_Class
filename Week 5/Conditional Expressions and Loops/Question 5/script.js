function calculateSum() {
  const num = parseInt(document.getElementById("number").value);
  let sum = 0;

  // Validate input
  if (isNaN(num) || num <= 0) {
    alert("Please enter a valid positive integer.");
    return;
  }

  // Use a for loop to calculate the sum
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  // Display the result
  document.getElementById("sumResult").textContent = 
    `The sum of natural numbers up to ${num} is: ${sum}`;
}
