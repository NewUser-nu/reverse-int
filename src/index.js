module.exports = function reverse (n) {
    let str = String(n);
    let rev = str.split("").reverse().join("");
    let integer = parseInt(rev);
    return integer;
}
