function topla(x, y) {
    return x + y;
}
topla(4, 5);
function topla2(x, y) {
    return x + y;
}
topla2(5, 3);
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(3, 5));
console.log(topla("ankara", 2));
console.log(topla2(2, 5));
console.log(topla3(6, 7));
var topla4 = function (x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
};
console.log(topla4(6));
var topla5 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(topla5(6));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("fatih", "mehmet", "ahmet"));
function davetEt1() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(davetEt1("fatih", "mehmet", "ahmet"));
