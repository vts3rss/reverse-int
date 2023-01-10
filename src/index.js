module.exports = function reverse(n) {
    n = Math.abs(n);
    let result = n.toString().split("").reverse().join("");
    return result;
};
