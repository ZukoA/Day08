// Bellow
var total = "0";
function funcWithArg() {
    total = "6";
    return undefined;
}
total = funcWithArg(6);
// Above
console.log(total);
module.exports = funcWithArg;