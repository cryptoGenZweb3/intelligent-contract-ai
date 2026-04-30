require("dotenv").config();
const { ethers } = require("ethers");

// connect to local blockchain
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

// your deployed contract address
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// contract ABI (only event needed)
const abi = [
  "event Request(string input)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

// spam protection
let lastCall = 0;

// listen to event
contract.on("Request", async (input) => {
  const now = Date.now();

  // 🔒 rate limit (2 seconds)
  if (now - lastCall < 2000) {
    console.log("⚠️ Blocked spam");
    return;
  }

  lastCall = now;

  // ⏱ start time
  const start = Date.now();

  console.log("📥 From contract:", input);

  // 🤖 AI logic (simple for now)
  const aiResponse = "AI says: " + input;

  console.log("🤖 AI Response:", aiResponse);

  // ⏱ end time
  const end = Date.now();
  console.log("⏱ Latency:", end - start, "ms");
});