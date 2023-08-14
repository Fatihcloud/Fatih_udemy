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

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
        (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
        console.log(tivitler)
    } else {
        console.log("Kullanıcın adı veya şifresi hatalı")
    }
}

giris(email, sifre)