require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GxA0-iF_T4fQIm1DJX1KVrjBoYcjp_aE",
      accounts: [
        "88a5122a1893638f6b8aab80dfacbb3c9fdc36c832bb5e6630cee84b4fd03887",
      ],
    },
  },
};
