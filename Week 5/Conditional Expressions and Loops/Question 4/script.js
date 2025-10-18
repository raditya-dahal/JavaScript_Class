function calculateGrade() {
  const score = parseFloat(document.getElementById("score").value);
  let grade;

  // Validate input
  if (isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid score between 0 and 100.");
    return;
  }

  // Determine grade based on the scale
  if (score >= 0 && score <= 39) {
    grade = 0;
  } else if (score >= 40 && score <= 51) {
    grade = 1;
  } else if (score >= 52 && score <= 63) {
    grade = 2;
  } else if (score >= 64 && score <= 75) {
    grade = 3;
  } else if (score >= 76 && score <= 87) {
    grade = 4;
  } else if (score >= 88 && score <= 100) {
    grade = 5;
  }

  // Display result
  document.getElementById("grade").textContent = 
    `Your grade is: ${grade}`;
}
