import { expect, assert } from "chai";
import { providers } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";

export function mintPersonNft(): void {
  it("Authority mints to user wallet", async function () {
    const myFirstMint = await this.person
      .connect(this.signers.admin)
      .safeMint(this.addr1.address, 0, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      });
    myFirstMint.wait();
    await expect(await this.person.balanceOf(this.addr1.address)).to.equal(1);
  });
}

export function nobodyElseCanMint(): void {
  it("Nobody else can mint", async function () {
    await expect(
      this.person.connect(this.addr1).safeMint(this.addr2.address, 1, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      })
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
}

export function mintPersonNftTwice(): void {
  it("Minting the same Person NFT twice fails", async function () {
    const myFirstMint = await this.person.safeMint(
      this.signers.admin.address,
      0,
      {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      }
    );
    myFirstMint.wait();
    const balance = await this.person.balanceOf(this.signers.admin.address);
    console.log(balance);
    await expect(
      this.person.safeMint(this.addr1.address, 0, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      })
    ).to.be.revertedWith("ERC721: token already minted");
  });
}

export function tokenTransferFails(): void {
  it("If user tries to transfer token it fails", async function () {
    const myFirstMint = await this.person
      .connect(this.signers.admin)
      .safeMint(this.addr1.address, 0, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      });
    myFirstMint.wait();
    const balance = await this.person.balanceOf(this.addr1.address);
    console.log(balance);
    console.log("now we try to transfer this nft back to authority");
    // third arg is tokenID, not quantity
    await expect(
      this.person
        .connect(this.addr1)
        .transferFrom(this.addr1.address, this.signers.admin.address, 0, {})
    ).to.be.revertedWith("only contract owner can transfer nfts");
  });
}

export function nftOwnerCannotBurnNft(): void {
  it("If nft owner tries to burn it fails", async function () {
    const myFirstMint = await this.person
      .connect(this.signers.admin)
      .safeMint(this.addr1.address, 0, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      });
    myFirstMint.wait();
    const balance = await this.person.balanceOf(this.addr1.address);
    console.log(balance);
    console.log("now we try to transfer this nft back to authority");
    // third arg is tokenID, not quantity
    await expect(
      this.person.connect(this.addr1).burn(0, {})
    ).to.be.revertedWith("only contract owner can burn nfts");
  });
}

export function burnUserNft(): void {
  it("If we burn user nft it works", async function () {
    const myFirstMint = await this.person
      .connect(this.signers.admin)
      .safeMint(this.addr1.address, 0, {
        value: ethers.utils.parseUnits("0.03", "ether"),
        gasLimit: 250000,
      });
    myFirstMint.wait();
    const balance = await this.person.balanceOf(this.addr1.address);
    console.log(balance);
    console.log("now we burn this nft");
    // third arg is tokenID, not quantity
    const burnNft = await this.person.connect(this.signers.admin).burn(0, {});
    burnNft.wait();
    await expect(await this.person.balanceOf(this.addr1.address)).to.be.equal(
      0
    );
  });
}

// x test: non-transferability: non-transferable nfts
// x  burnable only by us:
// x only contract owner mints
// x immutable by design
