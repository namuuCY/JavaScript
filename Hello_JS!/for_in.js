var obj = {
    name : "object",
    weight : 30,
    isObject : true,
    arr : [1, 2, 3],
    obj : { property : 1 }
};

var array = Object.keys( obj );

for ( var i = 0 ; i < array.length ; i++ ) {
    console.log( "\t", array[i] , ": ", obj[array[i]] );
}

console.log("\n\n For in 구문으로 object property 반복하기");

for ( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}