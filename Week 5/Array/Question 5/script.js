function sortArray(numbers, order) {
  if (order === "asc") {
    return numbers.slice().sort(function(a, b) {
      return a - b;
    });
  } else if (order === "desc") {
    return numbers.slice().sort(function(a, b) {
      return b - a;
    });
  } else {
    console.log("Invalid order parameter. Use 'asc' or 'desc'.");
    return numbers;
  }
}

document.getElementById("runProgram").addEventListener("click", function() {
  const numbers = [5, 2, 8, 1, 9];

  console.log("Original Array:", numbers);
  console.log("Ascending Order:", sortArray(numbers, "asc"));
  console.log("Descending Order:", sortArray(numbers, "desc"));
});
