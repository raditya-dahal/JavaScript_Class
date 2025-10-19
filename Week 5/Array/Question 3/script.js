document.getElementById("runProgram").addEventListener("click", function() {
  let numbers = [];
  let input;

  while (true) {
    input = prompt("Enter a number (or 'done' to finish):");
    if (input === null || input.toLowerCase() === "done") {
      break;
    }
    let num = parseFloat(input);
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Even Numbers:</h3>";

  for (let num of numbers) {
    if (num % 2 === 0) {
      let p = document.createElement("p");
      p.textContent = num;
      outputDiv.appendChild(p);
    }
  }

  let endMessage = document.createElement("p");
  endMessage.textContent = "End of the program.";
  endMessage.style.marginTop = "20px";
  outputDiv.appendChild(endMessage);
});
