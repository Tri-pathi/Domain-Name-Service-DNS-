const { ethers } = require("hardhat")

const main=async()=>{
    const deployers=await ethers.getSigners();
    const [owner,randomAddress]=deployers;
    const domainContractFactory=await ethers.getContractFactory("Domains");
    const domainContract= await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log(`Contract deployed and contract Address is ${domainContract.address}`);
     console.log("Contract deployed by" , owner.address);

     let transactionResponse=await domainContract.register("Pandit JI");
     await transactionResponse.wait(1);
     const domainOwnerAddress=await domainContract.getAddress("Pandit JI");
     console.log("Owner of domain", domainOwnerAddress);

     transactionResponse=await domainContract.connect(randomAddress).setRecord("pandit JI","ya hai mera ab");
     transactionResponse.wait()
     
};
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();