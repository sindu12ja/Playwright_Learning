var a = 10;

console.log(a);//Global scope- it ll ve available to everywhere

function printHello() {
    console.log("hi");
    var a = 20;//////////////////LOCAL SCOPE
    console.log(a);
}

printHello();

///var is not trustworthy