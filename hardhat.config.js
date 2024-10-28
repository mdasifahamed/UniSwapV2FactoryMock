require("dotenv").configDotenv();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  networks: {
    sepolia: {
      url: process.env.testnet_url,
      accounts: [process.env.private_key],
    },
  },
  etherscan: {
    apiKey: process.env.etherscan_api,
  },
};
