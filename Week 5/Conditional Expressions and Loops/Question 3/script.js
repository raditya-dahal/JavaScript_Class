function classifyTriangle() {
  // Get input values
  const a = parseFloat(document.getElementById("side1").value);
  const b = parseFloat(document.getElementById("side2").value);
  const c = parseFloat(document.getElementById("side3").value);

  // Validate input
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Please enter valid positive numbers for all sides.");
    return;
  }

  // Check if the sides can form a triangle using triangle inequality
  if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
    document.getElementById("triangleType").textContent = 
      "These sides do not form a valid triangle.";
    return;
  }

  let type = "";

  // Determine the type of triangle using &&, ||, and !
  if (a === b && b === c) {
    type = "Equilateral Triangle (all sides are equal)";
  } 
  else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    type = "Isosceles Triangle (two sides are equal)";
  } 
  else if (a !== b && b !== c && a !== c) {
    type = "Scalene Triangle (no sides are equal)";
  } 
  else {
    type = "Unable to determine triangle type.";
  }

  // Display result
  document.getElementById("triangleType").textContent = type;
}
