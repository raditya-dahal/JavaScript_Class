function calculateDistance() {
  // Get user input for both points
  const point1 = document.getElementById("point1").value.trim();
  const point2 = document.getElementById("point2").value.trim();

  if (!point1 || !point2) {
    alert("Please enter coordinates for both points.");
    return;
  }

  // Split input strings into x and y values
  const [x1, y1] = point1.split(",").map(Number);
  const [x2, y2] = point2.split(",").map(Number);

  // Validate inputs
  if ([x1, y1, x2, y2].some(isNaN)) {
    alert("Please enter valid numeric coordinates separated by a comma.");
    return;
  }

  // Calculate Euclidean distance
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display result
  document.getElementById("distance").textContent = 
    `The distance between the two points is ${distance.toFixed(2)}`;
}
