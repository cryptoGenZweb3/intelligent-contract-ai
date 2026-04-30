# Intelligent Contract AI

This project demonstrates an Intelligent Contract system integrating blockchain with off-chain AI processing.

## Features
- Smart contract built with Hardhat
- Event-driven AI listener using Node.js
- Real-time AI response system

## Performance
- Latency: ~1–10 ms
- Gas Usage: ~40,000–50,000 per transaction

## Security
- Rate limiting implemented (off-chain)
- On-chain call restriction
- Basic input handling

## Architecture
Contract → Event → Listener → AI → Response

## Tech Stack
- Solidity
- Hardhat
- Node.js
- Ethers.js

## Usage

1. Run local blockchain:
   npx hardhat node

2. Deploy contract:
   npx hardhat run scripts/deploy.js --network localhost

3. Start listener:
   node listener.js

4. Interact:
   npx hardhat console --network localhost