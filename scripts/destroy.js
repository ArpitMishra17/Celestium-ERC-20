async function main() {
    // Fetch the contract and the owner address
    const [owner] = await ethers.getSigners();
    
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    
    const Celestium = await ethers.getContractFactory("Celestium");
    const celestium = await Celestium.attach(contractAddress);
  
    console.log("Calling selfdestruct from:", owner.address);
  
    // Calling the destroy function
    await celestium.destroy();
    
    console.log("Contract destroyed successfully");
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  