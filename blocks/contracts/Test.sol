pragma solidity ^0.4.24;

contract Test {
//string greet = "Hello everyone";
    uint points =  0;
    
    function addPoints(uint _points){
        points += _points;
        
    }
    
      function getPoints() constant returns(uint){
        return points;
        
    }
    
}