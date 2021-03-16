var sum = 0;
function addThree(num) {
    sum = sum * num;
    return undefined;
}
function addFive(num) {
    sum = sum * num;
    return undefined;
}

addThree(3);
addFive(8);
// Only change code below this line
module.exports = {
    addThree,
    addFive
};