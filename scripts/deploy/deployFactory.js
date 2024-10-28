const { ethers } = require("hardhat");

async function deployFactory() {
  const contractInstance = await ethers.getContractFactory("UniswapV2Factory");
  const feeSetter = "0x903B2C49783Dc20CEe4B13a76C2802328f1BEd9e";
  const factoryContract = await contractInstance.deploy(feeSetter);
  const factoryAddress = await factoryContract.getAddress();
  console.log(`UniswapV2 factory Address: ${factoryAddress}`);
}

deployFactory().catch((error) => {
  console.log(error);
  process.exit(1);
});
