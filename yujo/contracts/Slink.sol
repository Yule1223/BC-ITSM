// SPDX-License-Identifier: MIT
pragma solidity >=0.4.4 < 0.7.0;
pragma experimental ABIEncoderV2;

// @title Slink
// @author Yule Zhang, José Andrés Velasco Santos

contract Slink {

    struct Service {
        string name;
        string description;
        uint price;
    }

    struct ServicesSpace {
        uint256 startDate;
        uint256 endDate;
        uint price;
    }

    struct RevisionReport {
        string name;
        uint price;
    }

    uint public id;
    address public provider;
    address public customer;
    uint256 public startDate;
    bool public automaticRenewal;

    string [] public serviceLevels;
    Service [] public services;
    Service [] public extraServices;
    //License??
    RevisionReport [] public revisionReports;
    string public billing;

    constructor (
        uint _id,
        address _customer,
        uint256 _startDate,
        bool _automaticRenewal,
        string memory _billing
    ) public {
        id = _id;
        provider = msg.sender;
        customer = _customer;
        startDate = _startDate;
        automaticRenewal = _automaticRenewal;
        billing = _billing;
    }

    function addServiceLevel(string memory serviceLevel) external checkProviderOrCustomer(msg.sender) {
        serviceLevels.push(serviceLevel);
    }

    function addService(string memory name, string memory description, uint price) external checkProviderOrCustomer(msg.sender) {
        Service memory service;
        service.name = name;
        service.description = description;
        service.price = price;

        services.push(service);
    }

    function addExtraService(string memory name, string memory description, uint price) external checkProviderOrCustomer(msg.sender) {
        Service memory service;
        service.name = name;
        service.description = description;
        service.price = price;

        extraServices.push(service);
    }

    function addRevisionReport(string memory name, uint price) external checkProviderOrCustomer(msg.sender) {
        RevisionReport memory revisionReport;
        revisionReport.name = name;
        revisionReport.price = price;

        revisionReports.push(revisionReport);
    }

    modifier checkProviderOrCustomer(address _address) {
        require(_address == provider || _address == customer, "Unauthorized");
        _;
    }

    function totalPrice() public view returns(uint) {
        uint total = 0;

        for (uint i = 0; i < services.length; i++) {
            total += services[i].price;
        }

        for (uint i = 0; i < extraServices.length; i++) {
            total += extraServices[i].price;
        }

        for (uint i = 0; i < revisionReports.length; i++) {
            total += revisionReports[i].price;
        }

        return total;
    }

}
