/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IMyGovernor,
  IMyGovernorInterface,
} from "../../../contracts/ProjectGovernor.sol/IMyGovernor";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposerBudget",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposerName",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IMyGovernor__factory {
  static readonly abi = _abi;
  static createInterface(): IMyGovernorInterface {
    return new utils.Interface(_abi) as IMyGovernorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMyGovernor {
    return new Contract(address, _abi, signerOrProvider) as IMyGovernor;
  }
}
