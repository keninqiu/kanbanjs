module.exports = {
    ABI: [
        {
            "constant": true,
            "inputs": [],
            "name": "FEE_DISTRIBUTION",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "MERCHANT_RECIPIENT",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getMerchantReferral",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_merchantRecipient",
                    "type": "address"
                },
                {
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "updateConfig",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "name": "_coinType",
                    "type": "uint32"
                },
                {
                    "name": "_totalAmount",
                    "type": "uint256"
                },
                {
                    "name": "_tax",
                    "type": "uint256"
                },
                {
                    "name": "_regionalAgents",
                    "type": "address[]"
                },
                {
                    "name": "_rewardBeneficiary",
                    "type": "address[]"
                }
            ],
            "name": "chargeFundsWithFee",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_feeDistributionAddr",
                    "type": "address"
                }
            ],
            "name": "updateFeeDistribution",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getLatestExchangilyRecipient",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "getOrderStatus",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "cancelRefundRequest",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "_coinType",
                    "type": "uint32"
                },
                {
                    "name": "_totalAmount",
                    "type": "uint256"
                },
                {
                    "name": "_tax",
                    "type": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "name": "_regionalAgents",
                    "type": "address[]"
                },
                {
                    "name": "_rewardBeneficiary",
                    "type": "address[]"
                }
            ],
            "name": "chargeFundsWithFeeWithSig",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "RATE",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "MERCHANT_REFERRAL",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "requestRefundWithSig",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "_msg",
                    "type": "bytes32"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "validateSignature",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "cancelRefundRequestWithSig",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "refund",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "getOrderInfo",
            "outputs": [
                {
                    "name": "_addresses",
                    "type": "address[3]"
                },
                {
                    "name": "_amounts",
                    "type": "uint256[3]"
                },
                {
                    "name": "_coinType",
                    "type": "uint32"
                },
                {
                    "name": "_orderStatus",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "requestRefund",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "SevenStarProxy",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orders",
            "outputs": [
                {
                    "name": "orderID",
                    "type": "bytes32"
                },
                {
                    "name": "customer",
                    "type": "address"
                },
                {
                    "name": "coinType",
                    "type": "uint32"
                },
                {
                    "name": "merchantRecipient",
                    "type": "address"
                },
                {
                    "name": "merchantGet",
                    "type": "uint256"
                },
                {
                    "name": "exchangilyRecipient",
                    "type": "address"
                },
                {
                    "name": "exchangilyGet",
                    "type": "uint256"
                },
                {
                    "name": "taxes",
                    "type": "uint256"
                },
                {
                    "name": "orderStatus",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "refundable",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "EXCHANGILY_RECIPIENT",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "MERCHANT_NAME",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "refundWithSig",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_sevenStarProxy",
                    "type": "address"
                },
                {
                    "name": "_feeDistributionAddr",
                    "type": "address"
                },
                {
                    "name": "_merchantRecipient",
                    "type": "address"
                },
                {
                    "name": "_merchantReferral",
                    "type": "address"
                },
                {
                    "name": "_rate",
                    "type": "uint256"
                },
                {
                    "name": "_merchantName",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_exchangilyRecipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_merchantRecipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "UpdateConfig",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_orderID",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_merchantRecipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_exchangilyRecipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_coinType",
                    "type": "uint32"
                },
                {
                    "indexed": false,
                    "name": "_merchantGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_feePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_rewardAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_tax",
                    "type": "uint256"
                }
            ],
            "name": "ChargeFundsWithFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "RequestRefund",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "CancelRefundRequest",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_orderID",
                    "type": "bytes32"
                }
            ],
            "name": "Refund",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        }
    ],
    Bytecode: '60806040523480156200001157600080fd5b50604051620054b8380380620054b8833981018060405281019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a385600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001bf6200026d640100000000026401000000009004565b83600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816003819055508060029080519060200190620002609291906200041f565b50505050505050620004ce565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166378e3e3346040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015620002f657600080fd5b505af11580156200030b573d6000803e3d6000fd5b505050506040513d60208110156200032257600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515620003db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f5a45524f2041444452455353204e4f5420414c4c4f574544000000000000000081525060200191505060405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200046257805160ff191683800117855562000493565b8280016001018555821562000493579182015b828111156200049257825182559160200191906001019062000475565b5b509050620004a29190620004a6565b5090565b620004cb91905b80821115620004c7576000816000905550600101620004ad565b5090565b90565b614fda80620004de6000396000f30060806040526004361061016a576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630714019a1461016f578063090849d3146101c6578063152cfd301461021d57806318a740641461027457806328c154d2146102c157806338d8683b146103b45780634498c5e1146103f757806346423aa71461044e5780635806abae146104a1578063620d7043146104ea578063664e9704146106265780636ad4df96146106515780636f252d4c146106a857806370023d561461073a578063715018a6146107cc578063723e55b9146107e35780637249fbb614610875578063768c6ec0146108be578063775274a1146109825780638bac9946146109cb5780638da5cb5b14610a225780638f32d59b14610a795780639c3f1e9014610aa85780639fb3147514610bcb578063cd4b42aa14610c14578063d77fc90214610c6b578063db0aa60814610cfb578063f2fde38b14610d6d575b600080fd5b34801561017b57600080fd5b50610184610db0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d257600080fd5b506101db610dd6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022957600080fd5b50610232610dfc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028057600080fd5b506102bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e26565b005b3480156102cd57600080fd5b5061039a6004803603810190808035600019169060200190929190803563ffffffff16906020019092919080359060200190929190803590602001909291908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919291929080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050611018565b604051808215151515815260200191505060405180910390f35b3480156103c057600080fd5b506103f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111e0565b005b34801561040357600080fd5b5061040c6112a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561045a57600080fd5b5061047d6004803603810190808035600019169060200190929190505050611368565b6040518082600381111561048d57fe5b60ff16815260200191505060405180910390f35b3480156104ad57600080fd5b506104d0600480360381019080803560001916906020019092919050505061139d565b604051808215151515815260200191505060405180910390f35b3480156104f657600080fd5b5061060c6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff1690602001909291908035906020019092919080359060200190929190803560ff1690602001909291908035600019169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091929192905050506115e3565b604051808215151515815260200191505060405180910390f35b34801561063257600080fd5b5061063b611837565b6040518082815260200191505060405180910390f35b34801561065d57600080fd5b5061066661183d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106b457600080fd5b506107206004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050611863565b604051808215151515815260200191505060405180910390f35b34801561074657600080fd5b506107b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050611ab2565b604051808215151515815260200191505060405180910390f35b3480156107d857600080fd5b506107e1611c21565b005b3480156107ef57600080fd5b5061085b6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050611d5c565b604051808215151515815260200191505060405180910390f35b34801561088157600080fd5b506108a46004803603810190808035600019169060200190929190505050611f27565b604051808215151515815260200191505060405180910390f35b3480156108ca57600080fd5b506108ed600480360381019080803560001916906020019092919050505061298e565b6040518085600360200280838360005b838110156109185780820151818401526020810190506108fd565b5050505090500184600360200280838360005b8381101561094657808201518184015260208101905061092b565b505050509050018363ffffffff1663ffffffff16815260200182600381111561096b57fe5b60ff16815260200194505050505060405180910390f35b34801561098e57600080fd5b506109b16004803603810190808035600019169060200190929190505050612c53565b604051808215151515815260200191505060405180910390f35b3480156109d757600080fd5b506109e0612f1d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610a2e57600080fd5b50610a37612f43565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610a8557600080fd5b50610a8e612f6c565b604051808215151515815260200191505060405180910390f35b348015610ab457600080fd5b50610ad76004803603810190808035600019169060200190929190505050612fc3565b604051808a600019166000191681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018863ffffffff1663ffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001826003811115610baf57fe5b60ff168152602001995050505050505050505060405180910390f35b348015610bd757600080fd5b50610bfa600480360381019080803560001916906020019092919050505061308e565b604051808215151515815260200191505060405180910390f35b348015610c2057600080fd5b50610c2961316b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610c7757600080fd5b50610c80613191565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cc0578082015181840152602081019050610ca5565b50505050905090810190601f168015610ced5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610d0757600080fd5b50610d536004803603810190808035600019169060200190929190803560ff1690602001909291908035600019169060200190929190803560001916906020019092919050505061322f565b604051808215151515815260200191505060405180910390f35b348015610d7957600080fd5b50610dae600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613cac565b005b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e2e612f6c565b1515610ea2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f47576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f5a45524f2041444452455353204e4f5420414c4c4f574544000000000000000081525060200191505060405180910390fd5b600081118015610f58575060648111155b1515610fcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f494e56414c49442052415445000000000000000000000000000000000000000081525060200191505060405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806003819055505050565b60008085111515611091576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f5a45524f20414d4f554e5400000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000825111151561110a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f454d50545920524546455252414c53000000000000000000000000000000000081525060200191505060405180910390fd5b6000600381111561111757fe5b60086000896000191660001916815260200190815260200160002060070160009054906101000a900460ff16600381111561114e57fe5b1415156111c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4455504c494341544544204f524445520000000000000000000000000000000081525060200191505060405180910390fd5b6111d287338888888888613d34565b600190509695505050505050565b6111e8612f6c565b151561125c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166378e3e3346040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561132857600080fd5b505af115801561133c573d6000803e3d6000fd5b505050506040513d602081101561135257600080fd5b8101908080519060200190929190505050905090565b600060086000836000191660001916815260200190815260200160002060070160009054906101000a900460ff169050919050565b60003373ffffffffffffffffffffffffffffffffffffffff1660086000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156114a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f43414e43454c2052455155455354204641494c45443a20494e56414c4944205381526020017f454e44455200000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600260038111156114b357fe5b60086000846000191660001916815260200190815260200160002060070160009054906101000a900460ff1660038111156114ea57fe5b14151561155f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43414e43454c204641494c45440000000000000000000000000000000000000081525060200191505060405180910390fd5b600160086000846000191660001916815260200190815260200160002060070160006101000a81548160ff0219169083600381111561159a57fe5b02179055507f1dfcc84d34bf29ab7d6a70922514c9a8d5675f58d2f83f54774c7d7dfa39e1b28260405180826000191660001916815260200191505060405180910390a1919050565b6000808811151561165c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f5a45524f20414d4f554e5400000000000000000000000000000000000000000081525060200191505060405180910390fd5b600082511115156116d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f454d50545920524546455252414c53000000000000000000000000000000000081525060200191505060405180910390fd5b600060038111156116e257fe5b600860008d6000191660001916815260200190815260200160002060070160009054906101000a900460ff16600381111561171957fe5b14151561178e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4455504c494341544544204f524445520000000000000000000000000000000081525060200191505060405180910390fd5b6001151561179f8b8d898989611ab2565b1515141515611816576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c4944205349474e415455524500000000000000000000000000000081525060200191505060405180910390fd5b6118258b8b8b8b8b8888613d34565b600190509a9950505050505050505050565b60035481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600381111561187257fe5b60086000886000191660001916815260200190815260200160002060070160009054906101000a900460ff1660038111156118a957fe5b14151561191e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f524546554e442052455155455354205355424d4954204641494c45440000000081525060200191505060405180910390fd5b6001151561192f8688878787611ab2565b15151415156119a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c4944205349474e415455524500000000000000000000000000000081525060200191505060405180910390fd5b600115156119b38761308e565b1515141515611a2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f52444552204e4f5420524546554e4441424c4500000000000000000000000081525060200191505060405180910390fd5b600260086000886000191660001916815260200190815260200160002060070160006101000a81548160ff02191690836003811115611a6557fe5b02179055507f5e48f40e7f7f515b9b3723c593391221201fa17fb03b0eda7369bf1459b4853b8660405180826000191660001916815260200191505060405180910390a195945050505050565b6000606060006040805190810160405280601a81526020017f174b616e62616e205369676e6564204d6573736167653a0a3332000000000000815250915081876040518083805190602001908083835b602083101515611b275780518252602082019150602081019050602083039250611b02565b6001836020036101000a038019825116818451168082178552505050505050905001826000191660001916815260200192505050604051809103902090508773ffffffffffffffffffffffffffffffffffffffff16600182888888604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015611bf3573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b611c29612f6c565b1515611c9d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060026003811115611d6b57fe5b60086000886000191660001916815260200190815260200160002060070160009054906101000a900460ff166003811115611da257fe5b141515611e17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43414e43454c204641494c45440000000000000000000000000000000000000081525060200191505060405180910390fd5b60011515611e288688878787611ab2565b1515141515611e9f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c4944205349474e415455524500000000000000000000000000000081525060200191505060405180910390fd5b600160086000886000191660001916815260200190815260200160002060070160006101000a81548160ff02191690836003811115611eda57fe5b02179055507f1dfcc84d34bf29ab7d6a70922514c9a8d5675f58d2f83f54774c7d7dfa39e1b28660405180826000191660001916815260200191505060405180910390a195945050505050565b600080611f32612f6c565b1515611fa6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60026003811115611fb357fe5b60086000856000191660001916815260200190815260200160002060070160009054906101000a900460ff166003811115611fea57fe5b14151561205f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f524546554e442052454a4543544544000000000000000000000000000000000081525060200191505060405180910390fd5b6001151561206c8461308e565b15151415156120e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f52444552204e4f5420524546554e4441424c4500000000000000000000000081525060200191505060405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166362c0e6ee846040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b15801561217c57600080fd5b505af1158015612190573d6000803e3d6000fd5b505050506121e360086000856000191660001916815260200190815260200160002060060154600860008660001916600019168152602001908152602001600020600301546149bd90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fea8b01160086000866000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000876000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff1681526020018281526020019350505050602060405180830381600087803b15801561232a57600080fd5b505af115801561233e573d6000803e3d6000fd5b505050506040513d602081101561235457600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c2660086000866000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000876000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000886000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16856040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b15801561251d57600080fd5b505af1158015612531573d6000803e3d6000fd5b505050506040513d602081101561254757600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fea8b01160086000866000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000876000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16600860008860001916600019168152602001908152602001600020600501546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff1681526020018281526020019350505050602060405180830381600087803b1580156126bc57600080fd5b505af11580156126d0573d6000803e3d6000fd5b505050506040513d60208110156126e657600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c2660086000866000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000876000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660086000886000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16600860008960001916600019168152602001908152602001600020600501546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b1580156128cd57600080fd5b505af11580156128e1573d6000803e3d6000fd5b505050506040513d60208110156128f757600080fd5b810190808051906020019092919050505050600360086000856000191660001916815260200190815260200160002060070160006101000a81548160ff0219169083600381111561294457fe5b02179055507f3fbd469ec3a5ce074f975f76ce27e727ba21c99176917b97ae2e713695582a128360405180826000191660001916815260200191505060405180910390a150919050565b612996614f68565b61299e614f8b565b6000806129a9614f68565b6129b1614f8b565b60086000886000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260006003811015156129ff57fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060086000886000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826001600381101515612a8457fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060086000886000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826002600381101515612b0957fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060086000886000191660001916815260200190815260200160002060030154816000600381101515612b6e57fe5b60200201818152505060086000886000191660001916815260200190815260200160002060050154816001600381101515612ba557fe5b60200201818152505060086000886000191660001916815260200190815260200160002060060154816002600381101515612bdc57fe5b6020020181815250508181600860008a6000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16600860008b6000191660001916815260200190815260200160002060070160009054906101000a900460ff16955095509550955050509193509193565b60003373ffffffffffffffffffffffffffffffffffffffff1660086000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612d5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001807f524546554e442052455155455354205355424d4954204641494c45443a20494e81526020017f56414c49442053454e444552000000000000000000000000000000000000000081525060400191505060405180910390fd5b60016003811115612d6957fe5b60086000846000191660001916815260200190815260200160002060070160009054906101000a900460ff166003811115612da057fe5b141515612e15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f524546554e442052455155455354205355424d4954204641494c45440000000081525060200191505060405180910390fd5b60011515612e228361308e565b1515141515612e99576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f52444552204e4f5420524546554e4441424c4500000000000000000000000081525060200191505060405180910390fd5b600260086000846000191660001916815260200190815260200160002060070160006101000a81548160ff02191690836003811115612ed457fe5b02179055507f5e48f40e7f7f515b9b3723c593391221201fa17fb03b0eda7369bf1459b4853b8260405180826000191660001916815260200191505060405180910390a1919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60086020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900463ffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154908060070160009054906101000a900460ff16905089565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635ba388fb836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561312957600080fd5b505af115801561313d573d6000803e3d6000fd5b505050506040513d602081101561315357600080fd5b81019080805190602001909291905050509050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156132275780601f106131fc57610100808354040283529160200191613227565b820191906000526020600020905b81548152906001019060200180831161320a57829003601f168201915b505050505081565b6000806002600381111561323f57fe5b60086000886000191660001916815260200190815260200160002060070160009054906101000a900460ff16600381111561327657fe5b1415156132eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f524546554e442052454a4543544544000000000000000000000000000000000081525060200191505060405180910390fd5b600115156133036132fa612f43565b88888888611ab2565b151514151561337a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c4944205349474e415455524500000000000000000000000000000081525060200191505060405180910390fd5b600115156133878761308e565b15151415156133fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f52444552204e4f5420524546554e4441424c4500000000000000000000000081525060200191505060405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166362c0e6ee876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b15801561349757600080fd5b505af11580156134ab573d6000803e3d6000fd5b505050506134fe60086000886000191660001916815260200190815260200160002060060154600860008960001916600019168152602001908152602001600020600301546149bd90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fea8b01160086000896000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008a6000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff1681526020018281526020019350505050602060405180830381600087803b15801561364557600080fd5b505af1158015613659573d6000803e3d6000fd5b505050506040513d602081101561366f57600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c2660086000896000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008b6000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16856040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b15801561383857600080fd5b505af115801561384c573d6000803e3d6000fd5b505050506040513d602081101561386257600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fea8b01160086000896000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008a6000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16600860008b60001916600019168152602001908152602001600020600501546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff1681526020018281526020019350505050602060405180830381600087803b1580156139d757600080fd5b505af11580156139eb573d6000803e3d6000fd5b505050506040513d6020811015613a0157600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c2660086000896000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860008b6000191660001916815260200190815260200160002060010160149054906101000a900463ffffffff16600860008c60001916600019168152602001908152602001600020600501546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b158015613be857600080fd5b505af1158015613bfc573d6000803e3d6000fd5b505050506040513d6020811015613c1257600080fd5b810190808051906020019092919050505050600360086000886000191660001916815260200190815260200160002060070160006101000a81548160ff02191690836003811115613c5f57fe5b02179055507f3fbd469ec3a5ce074f975f76ce27e727ba21c99176917b97ae2e713695582a128660405180826000191660001916815260200191505060405180910390a150949350505050565b613cb4612f6c565b1515613d28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b613d3181614a47565b50565b600080600080613d42614bd0565b613d6a6064613d5c6003548b614d7e90919063ffffffff16565b614e4b90919063ffffffff16565b9350600084111515613de4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f4d45524348414e542047455420544f4f20534d414c4c0000000000000000000081525060200191505060405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166343ab92a76040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613e6a57600080fd5b505af1158015613e7e573d6000803e3d6000fd5b505050506040513d6020811015613e9457600080fd5b8101908080519060200190929190505050925060008310158015613ed05750613ecc6064600354606403614d7e90919063ffffffff16565b8311155b1515613f44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f494e56414c4944205041594d454e54204645452052415445000000000000000081525060200191505060405180910390fd5b613f6b612710613f5d858b614d7e90919063ffffffff16565b614e4b90919063ffffffff16565b9150613f9282613f84868b614ede90919063ffffffff16565b614ede90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fea8b0118b8b613fe78b8d6149bd90919063ffffffff16565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff1681526020018281526020019350505050602060405180830381600087803b15801561407f57600080fd5b505af1158015614093573d6000803e3d6000fd5b505050506040513d60208110156140a957600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c268b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c6141318c8a6149bd90919063ffffffff16565b6040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b1580156141fc57600080fd5b505af1158015614210573d6000803e3d6000fd5b505050506040513d602081101561422657600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364cc4c268b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c6142ae86886149bd90919063ffffffff16565b6040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b15801561437957600080fd5b505af115801561438d573d6000803e3d6000fd5b505050506040513d60208110156143a357600080fd5b810190808051906020019092919050505050610120604051908101604052808c6000191681526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a63ffffffff168152602001600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200161448983856149bd90919063ffffffff16565b8152602001888152602001600160038111156144a157fe5b815250600860008d600019166000191681526020019081526020016000206000820151816000019060001916905560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548163ffffffff021916908363ffffffff16021790555060608201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816005015560e082015181600601556101008201518160070160006101000a81548160ff0219169083600381111561460e57fe5b0217905550905050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0f309398c8c600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8987600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168e8e6040518a63ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808a600019166000191681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018763ffffffff1663ffffffff1681526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156147d55780820151818401526020810190506147ba565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156148175780820151818401526020810190506147fc565b505050509050019b505050505050505050505050600060405180830381600087803b15801561484557600080fd5b505af1158015614859573d6000803e3d6000fd5b505050507f61d1ba9ffb95e83242af2149344e89e6c2f0fe2b574e014a9dc72bcc4a69c2488b8b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8988888f604051808a600019166000191681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018663ffffffff1663ffffffff168152602001858152602001848152602001838152602001828152602001995050505050505050505060405180910390a15050505050505050505050565b6000808284019050838110151515614a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515614b12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001807f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526020017f646472657373000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166378e3e3346040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015614c5857600080fd5b505af1158015614c6c573d6000803e3d6000fd5b505050506040513d6020811015614c8257600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515614d3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f5a45524f2041444452455353204e4f5420414c4c4f574544000000000000000081525060200191505060405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000841415614d935760009150614e44565b8284029050828482811515614da457fe5b04141515614e40576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f81526020017f770000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8091505b5092915050565b600080600083111515614ec6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b8284811515614ed157fe5b0490508091505092915050565b600080838311151515614f59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b82840390508091505092915050565b606060405190810160405280600390602082028038833980820191505090505090565b6060604051908101604052806003906020820280388339808201915050905050905600a165627a7a7230582004dd54e148ffa73fd3cfb99a3b5690af05e250b0a2674e9f1a1f8c0ce03c58710029'
}