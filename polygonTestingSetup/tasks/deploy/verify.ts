// from '../../typechain' import {MyGovernor,
//     MyGovernor__factory,
//     MyNftToken,
//     MyNftToken__factory,
//     Timelock,
//     Timelock__factory,}
import {
  Person,
  Person__factory,
  Vaccination,
  Vaccination__factory,
} from "../../typechain";
import { getExpectedContractAddress } from "../utils";
import { keccak256 } from "ethers/lib/utils";
import { task } from "hardhat/config";

task("verify:Dao").setAction(async function (_, { ethers, run }) {
  const timelockDelay = 2;
  //   const personAddr = "0x03c6845f936416A1065b25d9ce0e879cc35d255f";
  const vacAddr = "0xA07073d5F108359E636C2e81A8ff38AB2f3Bf310";

  function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  console.log("Starting, will sleep for 5 secs now");
  delay(5000).then(() => console.log("Normal code execution continues now"));
  //   require(, 'Need to wait 5 minutes');
  await run("verify:verify", {
    address: vacAddr,
    constructorArguments: [],
  });

  //   await run("verify:verify", {
  //     address: personAddr,
  //     constructorArguments: [],
  //   });
});
