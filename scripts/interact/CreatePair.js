require("dotenv").configDotenv();
const getWallet = require("../wallet");
const factoryAddress = "0xe27eD3412469eD2C1FAD33d5B053Afc866a37634";

const { getContract } = require("../getContract");
async function GetALLPairs() {
  const wallet = await getWallet(process.env.token_pair_creator);
  const { contract } = await getContract(factoryAddress);
  const DAIToken = "0x97E37850D1050ee041dA4b7451DCd0d57fcE27Cc";
  const WETH = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
  try {
    const tx = await contract.connect(wallet).createPair(DAIToken, WETH);
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
}

GetALLPairs();
