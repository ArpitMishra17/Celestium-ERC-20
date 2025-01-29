const { ethers } = require("hardhat");

async function main() {
  
  console.log("Deploying Celestium...");

  const Token = await ethers.getContractFactory("Celestium");
  const celestium = await Token.deploy(100000000, 50);

  await celestium.waitForDeployment();

  console.log(`Celestium deployed to: ${await celestium.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
