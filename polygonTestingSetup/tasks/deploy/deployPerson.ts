const hre = require("hardhat");

async function deployPerson() {
  const Person = await hre.ethers.getContractFactory("Person");
  const person = await Person.deploy();

  await person.deployed();
  console.log("Person Nft deployed to:", person.address);
}

async function deployVac() {
  const Vaccination = await hre.ethers.getContractFactory("Vaccination");
  const vaccination = await Vaccination.deploy();

  await vaccination.deployed();
  console.log("Vaccination Nft deployed to:", vaccination.address);
}

deployPerson()
  .then(() => deployVac())
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
