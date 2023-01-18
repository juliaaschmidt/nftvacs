/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { Sun, SunInterface } from "../../contracts/Sun";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600781526626bcaa37b5b2b760c91b6020808301918252835180850190945260038452624d544b60e81b9084015281519192916200005c91600091620000eb565b50805162000072906001906020840190620000eb565b5050506200008f620000896200009560201b60201c565b62000099565b620001ce565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f99062000191565b90600052602060002090601f0160209004810192826200011d576000855562000168565b82601f106200013857805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001685782518255916020019190600101906200014b565b50620001769291506200017a565b5090565b5b808211156200017657600081556001016200017b565b600181811c90821680620001a657607f821691505b60208210811415620001c857634e487b7160e01b600052602260045260246000fd5b50919050565b61193480620001de6000396000f3fe608060405234801561001057600080fd5b50600436106101125760003560e01c806301ffc9a71461011757806306fdde031461013f578063081812fc14610154578063095ea7b31461017f57806318160ddd1461019457806323b872dd146101a65780632f745c59146101b957806342842e0e146101cc57806342966c68146101df5780634f6ccce7146101f25780635a9b0b89146102055780636352211e1461022657806370a0823114610239578063715018a61461024c5780638da5cb5b1461025457806395d89b411461025c578063a144819414610264578063a22cb46514610277578063b88d4fde1461028a578063c87b56dd1461029d578063e985e9c5146102b0578063f2fde38b146102c3575b600080fd5b61012a6101253660046115da565b6102d6565b60405190151581526020015b60405180910390f35b6101476102e7565b60405161013691906116c5565b610167610162366004611614565b610379565b6040516001600160a01b039091168152602001610136565b61019261018d3660046115b0565b6103a0565b005b6008545b604051908152602001610136565b6101926101b436600461145d565b6104bb565b6101986101c73660046115b0565b6104ed565b6101926101da36600461145d565b610583565b6101926101ed366004611614565b61059e565b610198610200366004611614565b6105cf565b60408051808201909152600581526468656c6c6f60d81b6020820152610147565b610167610234366004611614565b610662565b61019861024736600461140f565b610697565b61019261071d565b610167610731565b610147610740565b6101926102723660046115b0565b61074f565b610192610285366004611574565b610765565b610192610298366004611499565b610770565b6101476102ab366004611614565b6107a8565b61012a6102be36600461142a565b61081c565b6101926102d136600461140f565b61084a565b60006102e1826108c0565b92915050565b6060600080546102f690611819565b80601f016020809104026020016040519081016040528092919081815260200182805461032290611819565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b5050505050905090565b6000610384826108e5565b506000908152600460205260409020546001600160a01b031690565b60006103ab82610662565b9050806001600160a01b0316836001600160a01b0316141561041e5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061043a575061043a813361081c565b6104ac5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610415565b6104b6838361090a565b505050565b6104c6335b82610978565b6104e25760405162461bcd60e51b81526004016104159061175c565b6104b68383836109d7565b60006104f883610697565b821061055a5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610415565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6104b683838360405180602001604052806000815250610770565b6105a7336104c0565b6105c35760405162461bcd60e51b81526004016104159061175c565b6105cc81610b6c565b50565b60006105da60085490565b821061063d5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610415565b60088281548110610650576106506118c5565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806102e15760405162461bcd60e51b81526004016104159061172a565b60006001600160a01b0382166107015760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610415565b506001600160a01b031660009081526003602052604090205490565b610725610c01565b61072f6000610c60565b565b600a546001600160a01b031690565b6060600180546102f690611819565b610757610c01565b6107618282610cb2565b5050565b610761338383610ccc565b61077a3383610978565b6107965760405162461bcd60e51b81526004016104159061175c565b6107a284848484610d97565b50505050565b60606107b3826108e5565b60006107ca60408051602081019091526000815290565b905060008151116107ea5760405180602001604052806000815250610815565b806107f484610dca565b604051602001610805929190611659565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610852610c01565b6001600160a01b0381166108b75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610415565b6105cc81610c60565b60006001600160e01b0319821663780e9d6360e01b14806102e157506102e182610ec7565b6108ee81610f17565b6105cc5760405162461bcd60e51b81526004016104159061172a565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061093f82610662565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061098483610662565b9050806001600160a01b0316846001600160a01b031614806109ab57506109ab818561081c565b806109cf5750836001600160a01b03166109c484610379565b6001600160a01b0316145b949350505050565b826001600160a01b03166109ea82610662565b6001600160a01b031614610a4e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610415565b6001600160a01b038216610ab05760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610415565b610abb838383610f34565b610ac660008261090a565b6001600160a01b0383166000908152600360205260408120805460019290610aef9084906117d6565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b1d9084906117aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915184939187169160008051602061190883398151915291a4505050565b6000610b7782610662565b9050610b8581600084610f34565b610b9060008361090a565b6001600160a01b0381166000908152600360205260408120805460019290610bb99084906117d6565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b03841690600080516020611908833981519152908390a45050565b33610c0a610731565b6001600160a01b03161461072f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610415565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610761828260405180602001604052806000815250610f3f565b816001600160a01b0316836001600160a01b03161415610d2a5760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610415565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610da28484846109d7565b610dae84848484610f72565b6107a25760405162461bcd60e51b8152600401610415906116d8565b606081610dee5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610e185780610e0281611854565b9150610e119050600a836117c2565b9150610df2565b6000816001600160401b03811115610e3257610e326118db565b6040519080825280601f01601f191660200182016040528015610e5c576020820181803683370190505b5090505b84156109cf57610e716001836117d6565b9150610e7e600a8661186f565b610e899060306117aa565b60f81b818381518110610e9e57610e9e6118c5565b60200101906001600160f81b031916908160001a905350610ec0600a866117c2565b9450610e60565b60006001600160e01b031982166380ac58cd60e01b1480610ef857506001600160e01b03198216635b5e139f60e01b145b806102e157506301ffc9a760e01b6001600160e01b03198316146102e1565b6000908152600260205260409020546001600160a01b0316151590565b6104b683838361107f565b610f498383611137565b610f566000848484610f72565b6104b65760405162461bcd60e51b8152600401610415906116d8565b60006001600160a01b0384163b1561107457604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fb6903390899088908890600401611688565b602060405180830381600087803b158015610fd057600080fd5b505af1925050508015611000575060408051601f3d908101601f19168201909252610ffd918101906115f7565b60015b61105a573d80801561102e576040519150601f19603f3d011682016040523d82523d6000602084013e611033565b606091505b5080516110525760405162461bcd60e51b8152600401610415906116d8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109cf565b506001949350505050565b6001600160a01b0383166110da576110d581600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6110fd565b816001600160a01b0316836001600160a01b0316146110fd576110fd8382611263565b6001600160a01b038216611114576104b681611300565b826001600160a01b0316826001600160a01b0316146104b6576104b682826113af565b6001600160a01b03821661118d5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610415565b61119681610f17565b156111e25760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610415565b6111ee60008383610f34565b6001600160a01b03821660009081526003602052604081208054600192906112179084906117aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020611908833981519152908290a45050565b6000600161127084610697565b61127a91906117d6565b6000838152600760205260409020549091508082146112cd576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611312906001906117d6565b6000838152600960205260408120546008805493945090928490811061133a5761133a6118c5565b90600052602060002001549050806008838154811061135b5761135b6118c5565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611393576113936118af565b6001900381819060005260206000200160009055905550505050565b60006113ba83610697565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b80356001600160a01b038116811461140a57600080fd5b919050565b60006020828403121561142157600080fd5b610815826113f3565b6000806040838503121561143d57600080fd5b611446836113f3565b9150611454602084016113f3565b90509250929050565b60008060006060848603121561147257600080fd5b61147b846113f3565b9250611489602085016113f3565b9150604084013590509250925092565b600080600080608085870312156114af57600080fd5b6114b8856113f3565b93506114c6602086016113f3565b92506040850135915060608501356001600160401b03808211156114e957600080fd5b818701915087601f8301126114fd57600080fd5b81358181111561150f5761150f6118db565b604051601f8201601f19908116603f01168101908382118183101715611537576115376118db565b816040528281528a602084870101111561155057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561158757600080fd5b611590836113f3565b9150602083013580151581146115a557600080fd5b809150509250929050565b600080604083850312156115c357600080fd5b6115cc836113f3565b946020939093013593505050565b6000602082840312156115ec57600080fd5b8135610815816118f1565b60006020828403121561160957600080fd5b8151610815816118f1565b60006020828403121561162657600080fd5b5035919050565b600081518084526116458160208601602086016117ed565b601f01601f19169290920160200192915050565b6000835161166b8184602088016117ed565b83519083019061167f8183602088016117ed565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116bb9083018461162d565b9695505050505050565b602081526000610815602083018461162d565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b600082198211156117bd576117bd611883565b500190565b6000826117d1576117d1611899565b500490565b6000828210156117e8576117e8611883565b500390565b60005b838110156118085781810151838201526020016117f0565b838111156107a25750506000910152565b600181811c9082168061182d57607f821691505b6020821081141561184e57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561186857611868611883565b5060010190565b60008261187e5761187e611899565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146105cc57600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000806000a";

type SunConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SunConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Sun__factory extends ContractFactory {
  constructor(...args: SunConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Sun> {
    return super.deploy(overrides || {}) as Promise<Sun>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Sun {
    return super.attach(address) as Sun;
  }
  override connect(signer: Signer): Sun__factory {
    return super.connect(signer) as Sun__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SunInterface {
    return new utils.Interface(_abi) as SunInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Sun {
    return new Contract(address, _abi, signerOrProvider) as Sun;
  }
}
