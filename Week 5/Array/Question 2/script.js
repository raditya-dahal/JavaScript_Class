document.getElementById("runProgram").addEventListener("click", function() {
  let numbers = [];

  for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Enter Number " + i + ":"));
    numbers.push(num);
  }

  console.log("Numbers:", numbers);

  let searchNum = parseFloat(prompt("Enter a Number to Search:"));
  if (numbers.includes(searchNum)) {
    console.log("Number " + searchNum + " is found in the array.");
  } else {
    console.log("Number " + searchNum + " is not found in the array.");
  }

  numbers.pop();
  console.log("Updated Numbers:", numbers);

  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log("Sorted Numbers:", numbers);
});
