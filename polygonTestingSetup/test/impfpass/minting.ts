import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import { getExpectedContractAddress } from "../../tasks/utils";
import { moveBlocks } from "../../tasks/move-blocks";
import { network } from "hardhat";
import * as fs from "fs";
import type { Timelock } from "../../typechain/contracts/Timelock";
import type { MyGovernor } from "../../typechain/contracts/MyGovernor";
import type { MyNftToken} from "../../typechain/contracts/MyNftToken";
import type { Box } from "../../typechain/contracts/Box";
import {
    developmentChains,
    VOTING_DELAY,
    proposalsFile,
    FUNC,
    PROPOSAL_DESCRIPTION,
    NEW_STORE_VALUE,
  } from "../../helper-hardhat-config"
  import {  mintPersonNft, mintPersonNftTwice, nobodyElseCanMint, tokenTransferFails, nftOwnerCannotBurnNft, burnUserNft } from "./minting.mint";
// before it was this path;
// import type { Timelock } from "../../src/types/contracts/Timelock";
// import type { Person } from "../../artifacts/contracts/Person/Person";
// import type { Vaccination} from "../../src/types/contracts/Vaccination";

import type { Person } from "../../typechain/contracts/Person";
import type { Vaccination } from "../../typechain/contracts/Vaccination";

import { Signers } from "../types";


import { NetworkUserConfig } from "hardhat/types";
// import { GovernorCountingSimple__factory, MyGovernorHelper } from "../../typechain";

const hre = require("hardhat");

describe("Unit tests", function () {

    before(async function () {
  
  

  
      // await hre.network.provider.request({ method: 'hardhat_setBalance', params: [this.signers.admin.address, ethers.utils.parseEther('10.0').toHexString()] })
    });

    describe("Governor", function () {
        beforeEach(async function () {

            this.signers = {} as Signers;
  
            const signers: SignerWithAddress[] = await ethers.getSigners();
            this.signers.admin = signers[0];
        
            this.addr1 = signers[1];
            this.addr2 = signers[2];
            this.addr3 = signers[3];
            const hre = require("hardhat");
        
            // const wallet =  wallet.connect(ethers.provider);
            // send ETH to the new wallet so it can perform a tx
            // await this.signers.addr.sendTransaction({to: wallet.address, value: ethers.utils.parseEther("1")});
        
            await hre.network.provider.send("hardhat_setBalance", [
                this.signers.admin.address,
                "0xFFFFFFFFFFFFEEEEEEEEEEEE", //"0x537B950", //AA87BEE538000", // 4096 wei
              ]);
        //   await hre.network.provider.send("hardhat_reset");
          const vaccinationArtifact: Artifact = await artifacts.readArtifact("Vaccination");
;
          this.vaccination = <Vaccination>await waffle.deployContract(this.signers.admin, vaccinationArtifact);
    

        const personArtifact: Artifact = await artifacts.readArtifact("Person");
          ;
        this.person = <Person>await waffle.deployContract(this.signers.admin, personArtifact);
              
        //   const governorHelperArtifact: Artifact = await artifacts.readArtifact("MyGovernorHelper");
       
        //   const governorExpectedAddress = await getExpectedContractAddress(this.signers.admin);
        //   this.timelock = <Timelock>await waffle.deployContract(this.signers.admin, timelockArtifact,[governorExpectedAddress, 2]);
     
    
        //   this.governorHelper = <MyGovernorHelper>await waffle.deployContract(this.signers.admin, governorHelperArtifact, [governorExpectedAddress]);
    
        //   this.governor = <MyGovernor>await waffle.deployContract(this.signers.admin, governorArtifact,[this.token.address, this.timelock.address, this.governorHelper.address]);
        //   //, [this.signers.admin.address, 300000000]);
    
        //   const boxArtifact: Artifact = await artifacts.readArtifact("Box");
        //   this.box = <Box>await waffle.deployContract(this.signers.admin, boxArtifact, [this.governor.address, this.governorHelper.address]);
        //   await this.token.deployed();
    
          await hre.network.provider.request({ method: 'hardhat_setBalance', params: [this.signers.admin.address, ethers.utils.parseEther('18').toHexString()] });
    
        //   await this.governorHelper.connect(this.signers.admin).function({
        //     value: ethers.utils.parseUnits("1","ether") });
    
        await hre.network.provider.request({ method: 'hardhat_setBalance', params: [this.addr1.address, ethers.utils.parseEther('10').toHexString()] });

    
        this.provider = ethers.provider; 
        let lance = ethers.BigNumber.from("1000000000000000000");
        const newBalance = ethers.utils.parseUnits("1000000000000000000000000", 'ether')
      
    // this is necessary because hex quantities with leading zeros are not valid at the JSON-RPC layer
        const newBalanceHex = newBalance.toHexString().replace("0x0", "0x");
    
        const balance = await this.provider.getBalance(this.signers.admin.address);
        await this.provider.send("hardhat_setBalance", [
            this.signers.admin.address,
          "0xFFFFFFFFFFFFFFFFFFEEEEEEEEEEEEA0FEEEEE", ]);
        console.log("Balance is: ", await this.provider.getBalance(this.signers.admin.address));
    
        });
            // mint
            console.log("Person NFT Tests")
            console.log("1. Test only We can mint: ")
            mintPersonNft();
            nobodyElseCanMint();
            console.log("2. Test Contract correctly tracks mints: ")
            mintPersonNftTwice();
            console.log("3. Owner cannot transfer token: ")
            tokenTransferFails();
            console.log("4. Only we can burn: ")
            nftOwnerCannotBurnNft();
            burnUserNft();
        })
});