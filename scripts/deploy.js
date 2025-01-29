const { ethers } = require("hardhat");

async function main() {
  const tokenCap = ethers.parseUnits("100000000", 18); // 100 million tokens
  const blockReward = ethers.parseUnits("50", 18); // 50 tokens per block

  console.log("Deploying Celestium...");

  const Token = await ethers.getContractFactory("Celestium");
  const celestium = await Token.deploy(tokenCap, blockReward);

  await celestium.waitForDeployment();

  console.log(`Celestium deployed to: ${await celestium.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
