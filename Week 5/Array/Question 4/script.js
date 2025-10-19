function sortArray(arr) {
  return arr.slice().sort(function(a, b) {
    return a - b;
  });
}

document.getElementById("runProgram").addEventListener("click", function() {
  const numbers = [12, 5, 8, 3, 9, 1];
  console.log("Original Array:", numbers);

  const sortedNumbers = sortArray(numbers);
  console.log("Sorted Array:", sortedNumbers);
});
