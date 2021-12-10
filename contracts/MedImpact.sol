// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.8.9;

contract MedImpact {
    
    // model MedicalStore
    struct MedicalStore {
        address owner;
        string name;
        string email;
        string phoneno;
        uint256 invoices;
        uint256 purchases;
        bool exists;
    }
    
    // model Medicine
    struct Medicine {
        string name;
        uint256 price;
        uint256 quantity;
        string expiryDate;
        string imageHash;
        string description;
        bool exists;
    }
}