function shadowing_example(){
    var val = 5;
    console.log("F", val);
    val++;
}
// 함수 안에서는 그 순간 val 이 전역변수 val로 덮어씌워진다
// 
var val = 0;
shadowing_example();
console.log("O", val);

// 한 함수 안에서만 사용되는 변수는 함수내에서 정의, 여러함수에서 사용되면 밖에서정의