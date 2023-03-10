/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface MyGovernorHelperInterface extends utils.Interface {
  functions: {
    "_children(uint256)": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getChildAddress(uint256)": FunctionFragment;
    "linkLocalGov(address,uint256)": FunctionFragment;
    "myGovernor()": FunctionFragment;
    "newProject(uint256,bool)": FunctionFragment;
    "transferOwnershipTimelock(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_children"
      | "getBalance"
      | "getChildAddress"
      | "linkLocalGov"
      | "myGovernor"
      | "newProject"
      | "transferOwnershipTimelock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_children",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChildAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "linkLocalGov",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "myGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newProject",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipTimelock",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "_children", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChildAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "linkLocalGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "myGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newProject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipTimelock",
    data: BytesLike
  ): Result;

  events: {
    "Log(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Log"): EventFragment;
}

export interface LogEventObject {
  gas: BigNumber;
}
export type LogEvent = TypedEvent<[BigNumber], LogEventObject>;

export type LogEventFilter = TypedEventFilter<LogEvent>;

export interface MyGovernorHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyGovernorHelperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _children(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChildAddress(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    linkLocalGov(
      newLocalGov: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    myGovernor(overrides?: CallOverrides): Promise<[string]>;

    newProject(
      proposalId: PromiseOrValue<BigNumberish>,
      fundsToContract: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipTimelock(
      boxAddress: PromiseOrValue<string>,
      newTimelock: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _children(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getChildAddress(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  linkLocalGov(
    newLocalGov: PromiseOrValue<string>,
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  myGovernor(overrides?: CallOverrides): Promise<string>;

  newProject(
    proposalId: PromiseOrValue<BigNumberish>,
    fundsToContract: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipTimelock(
    boxAddress: PromiseOrValue<string>,
    newTimelock: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _children(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getChildAddress(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    linkLocalGov(
      newLocalGov: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    myGovernor(overrides?: CallOverrides): Promise<string>;

    newProject(
      proposalId: PromiseOrValue<BigNumberish>,
      fundsToContract: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnershipTimelock(
      boxAddress: PromiseOrValue<string>,
      newTimelock: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Log(uint256)"(gas?: null): LogEventFilter;
    Log(gas?: null): LogEventFilter;
  };

  estimateGas: {
    _children(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getChildAddress(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linkLocalGov(
      newLocalGov: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    myGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    newProject(
      proposalId: PromiseOrValue<BigNumberish>,
      fundsToContract: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnershipTimelock(
      boxAddress: PromiseOrValue<string>,
      newTimelock: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _children(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChildAddress(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linkLocalGov(
      newLocalGov: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    myGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newProject(
      proposalId: PromiseOrValue<BigNumberish>,
      fundsToContract: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipTimelock(
      boxAddress: PromiseOrValue<string>,
      newTimelock: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
