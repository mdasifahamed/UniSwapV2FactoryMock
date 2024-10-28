require("dotenv");
const getWallet = require("../wallet");
const { getContract } = require("../getContract");
const factoryAddress = "0xe27eD3412469eD2C1FAD33d5B053Afc866a37634";
async function getallpairs() {
  const wallet = await getWallet(process.env.token_pair_creator);
  const { contract } = await getContract(factoryAddress);

  try {
    const pairs = await contract.connect(wallet).allPairs(0);
    console.log(pairs);
  } catch (error) {
    console.log(error);
  }
}

getallpairs();
