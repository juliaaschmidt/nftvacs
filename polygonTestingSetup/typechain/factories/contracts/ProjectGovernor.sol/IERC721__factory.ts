/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IERC721,
  IERC721Interface,
} from "../../../contracts/ProjectGovernor.sol/IERC721";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC721__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721Interface {
    return new utils.Interface(_abi) as IERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721 {
    return new Contract(address, _abi, signerOrProvider) as IERC721;
  }
}
