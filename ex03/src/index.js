function function1(myGlobalVariable)
function function2(notGlobalVariable) {
    var result = "";
    if (typeof myGlobalVariable != "10") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVariable != "5") {
        result += "notGlobalVariable: " + notGlobalVariable;
    }
    console.log(result);
}

function1(10);
function2(5);

module.exports = {
    function1,
    function2
}