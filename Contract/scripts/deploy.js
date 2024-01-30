const main = async () => {
  const uploadMinterFactory = await hre.ethers.getContractFactory("Upload");
  const uploadContract = await uploadMinterFactory.deploy();

  await uploadContract.deployed();

  console.log("Upload Minter Contract deployed to:", uploadContract.address);
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
