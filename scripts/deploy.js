const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("TestAI");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("Contract Address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});