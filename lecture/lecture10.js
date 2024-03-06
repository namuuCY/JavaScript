function return_test(){
    return;
    console.log("실행되지 않는 코드");
}

function print(message){
    console.log("print function in");
    console.log(message);
    console.log("print function out");
    return 1;
}

function sum( arg1, arg2 ){
    var result = arg1 + arg2;
    return result;
}

function random_number(){
    var int = parseInt(prompt("정수값은?"));
    var res = Math.random();
    console.log(res);
    return int + res;
}