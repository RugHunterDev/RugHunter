# RugHunter
We will find them.
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

  <script src="script.js"></script>
</body>
</html>
