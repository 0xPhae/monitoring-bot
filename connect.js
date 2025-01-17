// Import the Solana web3.js library
const solanaWeb3 = require('@solana/web3.js');
// Create a connection to the Solana devnet cluster

const connection = new solanaWeb3.Connection(
	solanaWeb3.clusterApiUrl('mainnet-beta'), 
	'confirmed'
);

// Function to get and display the current slot
async function getSlot() {
  try {
    const slot = await connection.getSlot();
    console.log('Current slot:', slot);
  } catch (error) {
    console.error('Error fetching slot:', error);
  }
}

// Call the function
getSlot();

//Subscribe to logs event to monitor all txns
connection.onLogs('all', (logs, context) => {
  console.log('New transaction logs:', logs);
});


/*
 * In the Solana blockchain, a slot is a fundamental time unit, currently set to
 * 400 milliseconds, during which a designated validator, known as the leader, has
 * the opportunity to propose a new block containing transactions.  ￼
 * 
 * Knowing the current slot number is essential for several reasons:
 * 	1. Network Synchronization: Validators and nodes use the current slot to
 * synchronize their operations, ensuring they are aligned with the network’s
 * state. This synchronization is crucial for maintaining the integrity and
 * consistency of the blockchain.  ￼
 * 	2.	Transaction Validation: Each transaction includes a recent blockhash,
 * which corresponds to a specific slot. By referencing the current slot, nodes
 * can determine the validity of transactions and prevent the processing of stale
 * or duplicate transactions.  ￼
 * 	3.	Leader Schedule Coordination: Solana assigns validators as leaders in a
 * rotating schedule, with each leader responsible for producing blocks during
 * their assigned slots. Knowing the current slot allows validators to identify
 * when they are scheduled to lead, enabling them to prepare for block production.
 * ￼
 * 
 * By keeping track of the current slot, participants in the Solana network can
 * effectively coordinate activities, validate transactions accurately, and
 * maintain overall network health.
**/
