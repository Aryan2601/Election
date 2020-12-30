var Election = artifacts.require("./Election.sol");
//here artifacts represents the contract abstraction that is specific to truffle


module.exports = function(deployer) {
  deployer.deploy(Election);
};

//this will help us to interact with Election solidity file

