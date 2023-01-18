// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/governance/utils/Votes.sol";
// interface IProjectGovernor {
//     function isLoyal(address account) external view returns (bool);
// }

contract Person is ERC721, ERC721Burnable, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    uint256 _tokenIdCounter = 200;
    mapping(uint256 => bool) public alreadyMinted;

    uint public constant MAX_SUPPLY = 600;
    uint256 public constant PRICE = 20000000000000000; //0.02 ETH
    uint256 public constant ROYALTY = 5; // 5% royalty minimum must be, 5% of 0.02 ETH = 0.001 ETH;
    event Log(uint256 gas);

    // metadata uri
    string public baseUri = "https://nftstorage.link/ipfs/bafybeicn3k7fmn3ldfjmptusjzo6ogjwlkc2jby46a2r3df4plvludwtua";

    //static
    string public baseExtension = ".json";

    constructor() ERC721("PersonToken", "PTK")
    public {
    }

    // modifier adminOnly() { // adminMembers[msg.sender] == true || 
    //     require((msg.sender == owner()), "Proj Nft: Only admin can execute this function.");
    //     _;
    // }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
    {
        require(
        _exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
        );
        return string(abi.encodePacked(baseUri, Strings.toString(tokenId), baseExtension));
    }

    function _baseURI() internal view virtual override
        returns (string memory) {
    return baseUri;
    }

    function setBaseUri(string memory _baseTokenURI) public onlyOwner {
        baseUri = _baseTokenURI;
    }

    function safeMint(address to, uint256 tokenId) public payable onlyOwner {
        require(alreadyMinted[tokenId] == false, "Token ID has already been minted");
        _safeMint(to, tokenId);
    }

    function getBalance() public view returns (uint256){
        return address(this).balance;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        require(msg.sender == owner(), "only contract owner can transfer nfts");
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function tokenOfOwnerByIndex(address owner, uint256 index) public view override(ERC721Enumerable) returns (uint256) {
        return super.tokenOfOwnerByIndex(owner, index);
    }

    function burn(uint256 tokenId) public override {
        require(msg.sender == owner(), "only contract owner can burn nfts");
        super._burn(tokenId);
    }
}
