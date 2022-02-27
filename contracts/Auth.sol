// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract Auth {
    struct User {
        string username;
        string phone_number;
        string email;
        string password;
        address userAddress;
    }

    address public owner;
    mapping(address => User) private users;

    constructor() public {
        owner = msg.sender;
    }

    function register(string memory _username,string memory _phone_number,string memory _email,string memory _password) public returns(address) {
        require(
            users[msg.sender].userAddress ==
                address(0x0000000000000000000000000000000000000000),
            "already registered"
        );

        users[msg.sender].username = _username;
        users[msg.sender].phone_number= _phone_number;
        users[msg.sender].email = _email;
        users[msg.sender].password = _password;
        users[msg.sender].userAddress = msg.sender;
        return (users[msg.sender].userAddress);
    }
    
    function login(string memory _username, string memory _password) public view returns (string memory,string memory,string memory) {
        require(msg.sender == users[msg.sender].userAddress, "Not allowed");
        
        // if ((bytes(_username).length == bytes(users[msg.sender].username).length) && (bytes(_password).length == bytes(users[msg.sender].password).length))
        // {
        //     return (users[msg.sender].username, users[msg.sender].phone_number, users[msg.sender].email);
        // }
        if (keccak256(abi.encodePacked(_username)) == keccak256(abi.encodePacked(users[msg.sender].username)) && keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(users[msg.sender].password)))
        {
            return (users[msg.sender].username, users[msg.sender].phone_number, users[msg.sender].email);
        }
    }
}