require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GxA0-iF_T4fQIm1DJX1KVrjBoYcjp_aE",
      accounts: [
        "YOUR_PRIVATE_KEY",
      ],
    },
  },
};
