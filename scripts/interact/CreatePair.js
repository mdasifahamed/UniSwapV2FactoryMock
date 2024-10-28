require("dotenv").configDotenv();
const getWallet = require("../wallet");
const factoryAddress = "0xe27eD3412469eD2C1FAD33d5B053Afc866a37634";

const { getContract } = require("../getContract");
async function CreatePair() {
  const wallet = await getWallet(process.env.token_pair_creator);
  const { contract } = await getContract(factoryAddress);
  const DAIToken = "0x97E37850D1050ee041dA4b7451DCd0d57fcE27Cc";
  const MAKER = "0x3d83AD8F864B8Cc50723A2d10d3a013b164E2d14";
  try {
    const tx = await contract.connect(wallet).createPair(DAIToken, MAKER);
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
}

CreatePair();
