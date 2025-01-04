document.getElementById('trackButton').addEventListener('click', () => {
  const walletAddress = document.getElementById('walletAddress').value;
  const tableBody = document.querySelector('#rugTable tbody');

  if (walletAddress) {
    // Example data - Replace this with API call or actual data
    const rugSize = Math.floor(Math.random() * 1000) + 1; // Random size
    const amountLost = (Math.random() * 10).toFixed(2); // Random amount lost

    // Create a new row
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${walletAddress}</td>
      <td>${rugSize}</td>
      <td>${amountLost}</td>
    `;

    // Append the row to the table
    tableBody.appendChild(row);
  } else {
    alert('Please enter a wallet address.');
  }
});
