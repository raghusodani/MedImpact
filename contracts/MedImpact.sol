// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.8.9;

contract MedImpact {
    
    // model MedicalStore
    struct MedicalStore {
        //uint256 latitude;
        //uint256 longitude;
        address owner;
        string ownerName;
        string storeName;
        //string email;
        string phoneno;
        //string landmark;
        //string city;
        string ownerAddress;
        //string pincode;
        uint256 invoices;
        uint256 purchases;
        //string aadhaarCardHash;
        bool exists;
    }
    
    // model Medicine
    struct Medicine {
        string name;
        uint256 rate;
        uint256 price;
        uint256 quantity;
        string batchNo;
        string manufactDate;
        string expiryDate;
        //string billHash;
        bool exists;
    }
    
    // map to store medicines
    // medicalStoreId => medicineName => expiryDate => Medicine
    //mapping(string => mapping(string => mapping(string => Medicine))) public medicines;

    // map to store medicines
    // owneraddress => batchId => Medicine
    mapping(address => mapping(string => Medicine)) public medicines;

    // map owneraddress => medicine count => batchNo
    mapping(address => mapping(uint256 => string)) public batchIdOfMedicine;
    
    // map owneraddress => medicine count
    mapping(address => uint256) public medicineCountInMedicalStore;

    // map ownerAddress => medicineCount => medicine
    mapping(address => mapping(uint256 => Medicine)) public myMedicines;
    
    // map to store medical stores
    // owneraddress => MedicalStore
    mapping(address => MedicalStore) public medicalStores;
    
    // map to store medical stores of a particular user
    // owneraddress => MedicalStore
    mapping(address => MedicalStore) public myMedicalStores;

    // map owneraddress => bill count => bills
    mapping(address => mapping(uint256 => string)) public myBills;

    // map owneraddress => bill count
    mapping(address => uint256) public myBillsCount;


    // store the number of medical stores
    uint256 public medicalStoresCount;

    constructor() public {
        //addMedicalStore("Real Medicos", "realmedicos@gmail.com", "9976565437", "xyzhash");
    }

    // function to add new medical store
    function addMedicalStore(/*uint256 _latitude, uint256 _longitude,*/ string memory _ownerName, string memory _medicalStoreName,/* string memory _email,*/ string memory _phoneno, /*string memory _landmark, string memory _city,*/ string memory _ownerAddress /*string memory _pincode, string memory _aadhaarCardHash*/) public {
        require(medicalStores[/*_medicalStoreId*/msg.sender].exists == false, "Medical store name already exists");
        
        medicalStoresCount++;
        medicalStores[/*_medicalStoreId*/msg.sender] = MedicalStore(/*_latitude, _longitude,*/ msg.sender, _ownerName, _medicalStoreName,/* _email,*/ _phoneno,/* _landmark, _city,*/ _ownerAddress,/* _pincode,*/ 0, 0,/* _aadhaarCardHash,*/ true);
        myMedicalStores[msg.sender] = MedicalStore(/*_latitude, _longitude,*/ msg.sender, _ownerName, _medicalStoreName,/* _email,*/ _phoneno,/* _landmark, _city,*/ _ownerAddress,/* _pincode,*/ 0, 0,/* _aadhaarCardHash,*/ true);
    }

    // function to add new stock of a specific medicine having a particular expiry date to a particular medical store
    function addMedicine(/*string memory _medicalStoreId,*/ string memory _medicineName, uint256 _rate, uint256 _price, uint256 _quantity, string memory _batchNo, string memory _manufactDate, string memory _expiryDate/*, string memory _billHash*/) public {
        //require(medicalStores[/*_medicalStoreId*/msg.sender].owner == msg.sender, "You are not the owner of medical store");
        require(_quantity > 0, "Quantity should be greater than 0");
        
        /*if(medicines[_medicalStoreId][_medicineName][_expiryDate].exists){
            medicines[_medicalStoreId][_medicineName][_expiryDate].quantity += _quantity;
        }
        else{
            medicines[_medicalStoreId][_medicineName][_expiryDate] = Medicine( _medicineName, _price, _quantity, _expiryDate, _billHash, true);   
        }*/
        medicineCountInMedicalStore[/*_medicalStoreId*/msg.sender]++;
        myMedicines[msg.sender][medicineCountInMedicalStore[/*_medicalStoreId*/msg.sender]] = Medicine(_medicineName, _rate, _price, _quantity, _batchNo, _manufactDate, _expiryDate,/* _billHash,*/ true);
        batchIdOfMedicine[/*_medicalStoreId*/msg.sender][ medicineCountInMedicalStore[/*_medicalStoreId*/msg.sender]] = _batchNo;
        medicines[/*_medicalStoreId*/msg.sender][_batchNo] = Medicine(_medicineName, _rate, _price, _quantity, _batchNo, _manufactDate, _expiryDate,/* _billHash,*/ true);

        medicalStores[/*_medicalStoreId*/msg.sender].invoices++;
        myMedicalStores[msg.sender].invoices++;
    }
    
    // function to purchase a specific medicine of a particular expiry date from a particular medical store
    function purchaseMedicine(/*string memory _medicalStoreId, string memory _medicineName,*/ uint256 _quantity, string memory _batchNo/*, string memory _expiryDate*/) public {
        //require(medicalStores[/*_medicalStoreId*/msg.sender].owner == msg.sender, "You are not the owner of medical store");
        require(medicines[/*_medicalStoreId*/msg.sender][_batchNo].quantity > 0, "Inufficient stock");
        require(_quantity > 0, "Quantity should be greater than 0");
        
        medicines[/*_medicalStoreId*/msg.sender][_batchNo].quantity -= _quantity;
        medicalStores[/*_medicalStoreId*/msg.sender].purchases++;
        myMedicalStores[msg.sender].purchases++;
    }

    function addBills(string memory _billHash) public {
        myBillsCount[msg.sender]++;
        myBills[msg.sender][myBillsCount[msg.sender]] = _billHash;
    }
    
    // function to return the count of a specific medicine of a particular expiry date present in a particular medical store 
    function medicineCount(/*string memory _medicineName, string memory _medicalStoreId, string memory _batchNo, string memory _expiryDate*/) view public returns(uint256){
        //require(medicalStores[_medicalStoreId].exists, "Medical store does not exist");
        //return medicines[_medicalStoreId][_batchNo].quantity;
        medicineCountInMedicalStore[msg.sender];
    }
    
    // function to return the number of invoices for a particular medical store
    function invoicesCount(/*string memory _medicalStoreId*/) view public returns(uint256){
        /*require(medicalStores[_medicalStoreId].exists, "Medical store does not exist");
        return medicalStores[_medicalStoreId].invoices;*/
        return myMedicalStores[msg.sender].invoices;
    }
    
    // function to return the number of purchases for a particular medical store
    function purchasesCount(/*string memory _medicalStoreId*/) view public returns(uint256){
        /*require(medicalStores[_medicalStoreId].exists, "Medical store does not exist");
        return medicalStores[_medicalStoreId].purchases;
        */
        return myMedicalStores[msg.sender].purchases;
    }

    // function to return all the medicines in a particular store
    /*function getMedicines(string memory _medicalStoreId) view public returns(uint256) {
        require(medicalStores[_medicalStoreId].exists, "Medical store does not exist");

    }*/
    
}
