// SPDX-License-Identifier: MIT


pragma solidity ^0.8.7;
import "hardhat/console.sol";
contract Domains {
    constructor() {
        
    }
    //A mapping to store names
    mapping(string=> address) public domain;
mapping(string=>string) public records;
    //register function to add name in mappings
   function register(string memory _name) public{
    //first check may be it is register name
    require(domain[_name]==address(0));
    domain[_name]=msg.sender;
  console.log(msg.sender, "has registered a domain!");
   }
    //get domain owners Address
    function getAddress(string memory _name) public view returns(address){
        return domain[_name];
    }
    //setrecord
    function setRecord(string memory _name,string memory _record) public{
        require(domain[_name]==msg.sender);
        records[_name]=_record;
    }
    //get record
    function getRecord(string memory _name) public view returns(string memory){
        return records[_name];
    }
}
