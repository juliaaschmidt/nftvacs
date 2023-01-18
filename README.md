# NFT Vaccination Smart Contract

## Vaccination NFT Contract

Decentralised Vaccination Record Storage. No Centralised Servers or Databases are used.
(Non-custodial: user's private key is stored locally in their app)
maximise self-custody.


- Vaccination NFT (active)
- Person NFT (on hold)

## Hardhat NFT Contract Unit Tests

All tests passing:
- Non-transferability
- Burnable by only the minting authority
- Minting authority is deployer contract address
- Minting to User Wallet Successfully
- Mints are correctly tracked by contract


## Open Tasks

- add more details to hash: impfung - batch - date - dr - receiver - recieverBirthday - bodyPart
- adding unit test is not possible: // before token transfer: 
require(to == address(0), "NFTs are non-transferable, can only be burnt.");
otherwise mitning won't work.    



## Completed Tasks

- metadata; plain data; name der person + Geburtsdatum
- https://github.com/Fa-95/vac_v2/blob/main/assets/Connections/MyFancyFunction.js
- lines 29 - 35: code updated

