var kullanicilar = [
    { email: "fatihbulut@gmail.com", sifre: "12345" },
    { email: "efebulut@gmail.com", sifre: "12345" }
]

var tivitler = [
    { email: "fatihbulut@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "fatihbulut@gmail.com", tivit: "Bugün hava çok güzel 2" },
    { email: "efebulut@gmail.com", tivit: "madalya aldım ben" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullanicilarVarmi(email, sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false
}

function giris() {
    if (kullanicilarVarmi(email,sifre)){
        console.log(tivitler)
    } else {
        console.log("Kullanıcın adı veya şifresi hatalı")
    }
}
giris(email, sifre)