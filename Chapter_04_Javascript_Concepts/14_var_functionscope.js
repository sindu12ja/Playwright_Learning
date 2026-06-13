var a = 10;
console.log(a); // 10


//function scoped

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // local  scope
    console.log(a); // 20

    if (true) {
        var a = 30;  // NOT block scoped
        console.log(a); // 30
    }

    console.log("F ->", a);
}

console.log("G -> ", a);

printHello();
