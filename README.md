<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Solana Rug Tracker</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Solana Rug Tracker</h1>
  </header>

  <main>
    <section id="search">
      <input type="text" id="walletAddress" placeholder="Enter Wallet Address" />
      <button id="trackButton">Track Rugs</button>
    </section>

    <section id="results">
      <h2>Rug Pulls Detected:</h2>
      <table id="rugTable">
        <thead>
          <tr>
            <th>Wallet Address</th>
            <th>Rug Size</th>
            <th>Amount Lost (SOL)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Results will appear here -->
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Solana Rug Tracker</p>
  </footer>

  <script>
    async function getRugPulls(walletAddress) {
      try {
        const response = await fetch(`https://api.mainnet-beta.solana.com`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getConfirmedSignaturesForAddress2',
            params: [walletAddress, { limit: 10 }]
          })
        });

        const data = await response.json();
        const transactions = data.result || [];

        const tableBody = document.querySelector('#rugTable tbody');
        tableBody.innerHTML = '';

        for (const tx of transactions) {
          const txDetailsResponse = await fetch(`https://api.mainnet-beta.solana.com`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: 1,
              method: 'getConfirmedTransaction',
              params: [tx.signature]
            })
          });

          const txDetails = await txDetailsResponse.json();
          const amountLost = txDetails.result.meta.preBalances[0] - txDetails.result.meta.postBalances[0];
          const rugSize = amountLost / 1e9; // Convert lamports to SOL

          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${walletAddress}</td>
            <td>${rugSize.toFixed(2)}</td>
            <td>${rugSize.toFixed(2)} SOL</td>
          `;
          tableBody.appendChild(row);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data from Solana network.');
      }
    }

    document.getElementById('trackButton').addEventListener('click', () => {
      const walletAddress = document.getElementById('walletAddress').value;
      if (walletAddress) {
        getRugPulls(walletAddress);
      } else {
        alert('Please enter a wallet address.');
      }
    });
  </script>
</body>
</html>
