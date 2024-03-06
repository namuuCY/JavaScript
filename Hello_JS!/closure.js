function makeCounterFunction(initVal){
    var count = initVal;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();

/*

makeCounterFunction(0); 에서

closure가 가리키는 함수 function Increase(){}

closure의 environment
    var count = 0


*/