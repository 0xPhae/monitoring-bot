// Import the Solana web3.js library
const { Connection, clusterApiUrl } = require('@solana/web3.js');

// Define the HTTP and WebSocket endpoints
const httpEndpoint = 'https://api.devnet.solana.com';
const wsEndpoint = 'wss://api.devnet.solana.com';

// Create a connection to the specified Solana cluster
const connection = new Connection(httpEndpoint, {
  wsEndpoint: wsEndpoint,
  commitment: 'confirmed',
});

// Subscribe to logs event to monitor all transactions
connection.onLogs('all', (logs, context) => {
  console.log('New transaction logs:', logs);
});
