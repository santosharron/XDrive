require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GxA0-iF_T4fQIm1DJX1KVrjBoYcjp_aE",
      accounts: [
        "a5bf39eeec1576d909cc7c740ad843eed99d38287c67e849f850e24101912c28",
      ],
    },
  },
};
