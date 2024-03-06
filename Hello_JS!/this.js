function f(){
    console.log(this);
    // this: 예약어, 이 함수 f가 불렸을때 
    // 어떤 객체에 bind된 속성으로써 불렸는지를 알수있게 해줌

    // 일반적인 함수를 호출할때 해당 함수 내부에서 사용된 this는 전역객체
    // 브라우저의 경우 window 객체 에 바인딩 된다.
    console.log("f is called");

}

function setName(name){
    this.name=name;
}

var o = { name: "object", method:f, setName:setName };
var o2 = { name: "", setName:setName };

o.setName("object1");
o2.setName("object2");

console.log( o, o2 );