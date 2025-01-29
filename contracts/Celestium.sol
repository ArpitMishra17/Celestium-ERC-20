// contracts/Celestium.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Celestium is ERC20Capped, ERC20Burnable {
    address payable public owner;
    uint256 public blockReward;

    constructor(uint256 cap, uint256 reward) ERC20("Celestium", "CLST") ERC20Capped(cap * (10 ** decimals())){
        owner = payable(msg.sender);
        _mint(owner, 50000000 * (10 ** decimals())); //Sends me 50M of the inital supply of the token.
        blockReward = reward * (10 ** decimals());
    }

    

    function _mintMinerReward() internal {
        _mint(block.coinbase, blockReward);
    }

    /**
     * @dev Overrides `_update()` to include miner reward logic.
     * `_update()` replaces `_beforeTokenTransfer()` in OpenZeppelin ERC20 v5.2.0.
     */
    function _update(address from, address to, uint256 value) internal virtual override(ERC20Capped, ERC20) {
        if (from != address(0) && to != block.coinbase && block.coinbase != address(0)) {
            _mintMinerReward();
        }
        super._update(from, to, value);
    }

    function setBlockReward(uint256 reward) public onlyOwner {
        blockReward = reward * (10 ** decimals()); 
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }

    modifier onlyOwner {
        require(msg.sender ==owner, "Only the owner can call this function");
        _;
    }
}