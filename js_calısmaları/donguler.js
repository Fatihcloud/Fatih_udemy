for (i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("bitti");

var sehirler = ["ankara", "istanbul", "izmir", "adana"]


for (i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i])
}

var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}


sehirler.forEach(function (sehir) {
    console.log(sehir)
})