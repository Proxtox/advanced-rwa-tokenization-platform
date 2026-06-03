// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Compliance Hook
contract ComplianceHook {
    address public admin;
    mapping(address => bool) public approvedAssets;

    constructor() {
        admin = msg.sender;
    }

    function approveAsset(address asset) external {
        require(msg.sender == admin, "Only admin");
        approvedAssets[asset] = true;
    }

    function isApproved(address asset) external view returns (bool) {
        return approvedAssets[asset];
    }
}