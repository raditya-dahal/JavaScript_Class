document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('output');
  let n;
  while (true) {
    const raw = prompt('Enter a positive integer:');
    if (raw === null) {
      container.textContent = 'No input provided.';
      return;
    }
    n = Number(raw.trim());
    if (Number.isInteger(n) && n > 0) break;
    alert('Please enter a valid positive integer.');
  }
  const promptLine = document.createElement('p');
  promptLine.textContent = 'Enter a positive integer: ' + n;
  const title = document.createElement('h2');
  title.textContent = 'Multiplication Table:';
  const table = document.createElement('table');
  for (let i = 1; i <= n; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j <= n; j++) {
      const td = document.createElement('td');
      td.textContent = i * j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(promptLine);
  container.appendChild(title);
  container.appendChild(table);
});