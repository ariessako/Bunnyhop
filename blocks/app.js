const express = require('express');
const app = express();
const cors = require('cors');

const Web3 = require('web3');
const web3 = new Web3("http://localhost:7545");

app.use(cors());

var contract = new web3.eth.Contract(
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_points",
                    "type": "uint256"
                }
            ],
            "name": "addPoints",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_points",
                    "type": "uint256"
                }
            ],
            "name": "deductpoints",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getPoints",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],'0xe0062EA3d922a178ed180D895F2737b208237eaf',
   {
     from: '0xA2493Ef1F688F32119a40981c69b25d56aAa2E2A', 
     data: '6080604052600080556001805467ffffffffffffffff1916905534801561002557600080fd5b5060c5806100346000396000f30060806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312fb1cbd8114604d578063f4b7095b146064575b600080fd5b348015605857600080fd5b5060626004356088565b005b348015606f57600080fd5b5060766093565b60408051918252519081900360200190f35b600080549091019055565b600054905600a165627a7a72305820c37a3b15b4a6c661c8c7de2a01a0a2ef6eb4d25d55c88c4505d0ece164451a130029', 
     gas: '4700000'
   })
  // console.log(web3.eth.accounts)

  // web3.eth.getAccounts(accounts => console.log(accounts))
   //web3.eth.getAccounts(console.log);
app.get('/add-points',(req,res,next)=>{
    const points = req.query.points;
    console.log('Player sent:',points);
    contract.methods.addPoints(points).send({from: '0xA2493Ef1F688F32119a40981c69b25d56aAa2E2A'}).then(e => res.send('points added'));

})



app.get('/get-points',(req,res,next)=>{
    contract.methods.getPoints().call().then(e => res.send(e));

})

app.listen(3000);

// function setPoint(){
//     contract.methods.setPoints(1).send({from: '0xA2493Ef1F688F32119a40981c69b25d56aAa2E2A'}).then(e => res.send('points added'));

// }

// setPoint();


//web3.eth.getAccounts().then(e => console.log(e))

//var testContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_newGreet","type":"string"}],"name":"setGreet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGreet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);
// var contract = new web3.eth.Contract(
//     [
//         {
//             "constant": false,
//             "inputs": [
//                 {
//                     "name": "_newGreet",
//                     "type": "string"
//                 }
//             ],
//             "name": "setGreet",
//             "outputs": [],
//             "payable": false,
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "constant": true,
//             "inputs": [],
//             "name": "getGreet",
//             "outputs": [
//                 {
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "payable": false,
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ],
//    {
//      from: '0x0abe50ce7dd24f1e6c4beb32ad3fff802d139450', 
//      data: '0x60806040526040805190810160405280600e81526020017f48656c6c6f2065766572796f6e650000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6102d7806101166000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680639698086b14610051578063d705a4b5146100ba575b600080fd5b34801561005d57600080fd5b506100b8600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061014a565b005b3480156100c657600080fd5b506100cf610164565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561010f5780820151818401526020810190506100f4565b50505050905090810190601f16801561013c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b8060009080519060200190610160929190610206565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101fc5780601f106101d1576101008083540402835291602001916101fc565b820191906000526020600020905b8154815290600101906020018083116101df57829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024757805160ff1916838001178555610275565b82800160010185558215610275579182015b82811115610274578251825591602001919060010190610259565b5b5090506102829190610286565b5090565b6102a891905b808211156102a457600081600090555060010161028c565b5090565b905600a165627a7a72305820fcfd220e64a9944da870f13af8fb3824b493563538b3a3cad5186019556be6c90029', 
//      gas: '4700000'
//    })



//var testContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_newGreet","type":"string"}],"name":"setGreet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGreet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);


//contract.methods.getGreet().call().then(e=> console.log(e));
//contract.methods.setGreet('I am a setter').send('0x0abe50ce7dd24f1e6c4beb32ad3fff802d139450').then(e=> console.log(e));
//contract.deploy().send();

