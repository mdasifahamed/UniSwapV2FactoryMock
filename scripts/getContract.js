const { ethers, artifacts } = require("hardhat");

async function getContract(contractAddress) {
  const contractArtifact = artifacts.readArtifactSync("UniswapV2Factory");
  const contract = await ethers.getContractAt(
    contractArtifact.abi,
    contractAddress
  );
  return { contract };
}
// getContract();

module.exports = {
  getContract,
};
