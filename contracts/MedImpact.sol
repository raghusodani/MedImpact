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
        string aadhaarCardHash;
        bool exists;
    }
    
    // model Medicine
    struct Medicine {
        string name;
        uint256 price;
        uint256 quantity;
        string expiryDate;
        string billHash;
        bool exists;
    }
    
    // map to store medicines
    // medicineName => medicineStoreName => expiryDate
    mapping(string => mapping(string => mapping(string => Medicine))) public medicines;
    
    // map to store medical stores
    // medicalStoreId => MedicalStore
    mapping(string => MedicalStore) public medicalStores;
    
    // map to store medical stores of a particular user
    // userEthereumAddress => medicalStoreId => MedicalStore
    mapping(address => mapping(string => MedicalStore)) myMedicalStores;

    // store the number of medical stores
    uint256 public medicalStoresCount;

    mapping(uint => Image) public images;

    constructor() public {
        addMedicalStore("Real Medicos", "realmedicos@gmail.com", "9976565437");
    }

    // function to add new medical store
    function addMedicalStore(string memory _medicalStoreName, string memory _email, string memory _phoneno, string memory _aadhaarCardHash) public {
        require(medicalStores[_medicalStoreName].exists == false, "Medical store name already exists");
        
        medicalStoresCount++;
        medicalStores[_medicalStoreName] = MedicalStore(msg.sender, _medicalStoreName, _email, _phoneno, 0, 0, _aadhaarCardHash, true);
        myMedicalStores[msg.sender][_medicalStoreName] = MedicalStore(msg.sender, _medicalStoreName, _email, _phoneno, 0, 0, _aadhaarCardHash, true);
    }

    // function to add new stock of a specific medicine having a particular expiry date to a particular medical store
    function addMedicine(string memory _medicalStoreName, string memory _medicineName, uint256 _price, uint256 _quantity, string memory _expiryDate, string memory _billHash) public {
        require(medicalStores[_medicalStoreName].owner == msg.sender, "You are not the owner of medical store");
        require(_quantity > 0, "Quantity should be greater than 0");
        
        if(medicines[_medicineName][_medicalStoreName][_expiryDate].exists){
            medicines[_medicineName][_medicalStoreName][_expiryDate].quantity += _quantity;
        }
        else{
            medicines[_medicineName][_medicalStoreName][_expiryDate] = Medicine( _medicineName, _price, _quantity, _expiryDate, _billHash, true);   
        }
        medicalStores[_medicalStoreName].invoices++;
        myMedicalStores[msg.sender][_medicalStoreName].invoices++;
    }
    
    // function to purchase a specific medicine of a particular expiry date from a particular medical store
    function purchaseMedicine(string memory _medicalStoreName, string memory _medicineName, uint256 _quantity, string memory _expiryDate) public {
        require(medicalStores[_medicalStoreName].owner == msg.sender, "You are not the owner of medical store");
        require(medicines[_medicineName][_medicalStoreName][_expiryDate].quantity > 0, "Inufficient stock");
        require(_quantity > 0, "Quantity should be greater than 0");
        
        medicines[_medicineName][_medicalStoreName][_expiryDate].quantity -= _quantity;
        medicalStores[_medicalStoreName].purchases++;
        myMedicalStores[msg.sender][_medicalStoreName].purchases++;
    }
    
    // function to return the count of a specific medicine of a particular expiry date present in a particular medical store 
    function medicineCount(string memory _medicineName, string memory _medicalStoreName, string memory _expiryDate) view public returns(uint256){
        require(medicalStores[_medicalStoreName].exists, "Medical store does not exist");
        return medicines[_medicineName][_medicalStoreName][_expiryDate].quantity;
    }
    
    // function to return the number of invoices for a particular medical store
    function invoicesCount(string memory _medicalStoreName) view public returns(uint256){
        require(medicalStores[_medicalStoreName].exists, "Medical store does not exist");
        return medicalStores[_medicalStoreName].invoices;
    }
    
    // function to return the number of purchases for a particular medical store
    function purchasesCount(string memory _medicalStoreName) view public returns(uint256){
        require(medicalStores[_medicalStoreName].exists, "Medical store does not exist");
        return medicalStores[_medicalStoreName].purchases;
    }
    
}
