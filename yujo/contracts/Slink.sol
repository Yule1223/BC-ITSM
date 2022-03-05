// SPDX-License-Identifier: MIT
pragma solidity >=0.4.4 < 0.7.0;
pragma experimental ABIEncoderV2;

// @title Slink V1
// @author Yule Zhang, José Andrés Velasco Santos

contract SlinkV1 {

    struct Service {
        string name;
        string description;
        uint price;
        uint pricePeriodicity;
    }

    struct ServiceSpace {
        string name;
        string startTime;
        string endTime;
        uint price;
        uint pricePeriodicity;
    }

    struct RevisionReport {
        string name;
        uint price;
        uint pricePeriodicity;
    }

    struct Billing {
        string name;
        uint periodicity;
    }

    struct SLA {
        address customer;
        uint startDate;
        bool automaticRenewal;
        Service services;
        Service extraServices;
        string serviceLevel;
        ServiceSpace serviceSpace;
        string license;
        RevisionReport revisionReport;
        Billing billing;
        uint billingMethod;
    }

    address public provider;
    uint[] private slaIDs;
    mapping(uint => SLA) private slas;

    function findId(uint id) internal view returns(uint) {
        uint pos = slaIDs.length;
        uint i = 0;
        while (i < slaIDs.length && pos == slaIDs.length)  {
            if (slaIDs[i] == id) {
                pos = i;
            }
            i++;
        }
        return pos;
    }

    constructor() public {
        provider = msg.sender;
    }

    function addSLA(uint id, SLA memory sla) external checkProvider() checkNotExistID(id) {
        slaIDs.push(id);
        slas[id] = sla;
    }

    function getSLA(uint id) external view checkExistID(id)  returns(SLA memory) {
        return slas[id];
    }

    modifier checkProvider() {
        require(provider == msg.sender, "Unauthorized");
        _;
    }

    modifier checkExistID(uint id) {
        require(findId(id) != slaIDs.length, "SLA id not exist");
        _;
    }

    modifier checkNotExistID(uint id) {
        require(findId(id) == slaIDs.length, "SLA id exist");
        _;
    }

}
