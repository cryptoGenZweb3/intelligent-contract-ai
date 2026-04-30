// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TestAI {
    event Request(string input);

    function askAI(string memory input) public {
        emit Request(input);
    }
}