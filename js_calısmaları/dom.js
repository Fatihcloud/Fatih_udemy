//document.getElementById("bio").innerHTML="Fatih bulut : 2014"

//var intro1 = document.getElementById("intro1");

//var mesaj = document.getElementById("mesaj");


//mesaj.innerHTML = intro1.innerHTML;


//var tumListe = document.getElementsByTagName("ul");
//var sehirler = tumListe[0]

//tumElemanlar = sehirler.getElementsByTagName("li");

//for (i = 0; i < tumElemanlar.length; i++) {
// alert(tumElemanlar[i].innerHTML)
//}

//var classElamanları = document.getElementsByClassName("intro1");

//alert(classElamanları[0].innerHTML)
//alert(classElamanları.length)

// var queryElemanları = document.querySelectorAll("p.intro1");

// alert(queryElemanları.length);


// var isimElemanları = document.getElementsByName("musteriAdi")

// alert(isimElemanları[0].value);

// var fatih = document.getElementById("fatih").addEventListener("mouseover", rengiDegistir);

// function rengiDegistir() {
//     document.getElementById("div1").style.color = "red";
//     var isimElemanları = document.getElementsByName("musteriAdi")
//     isimElemanları[0].value = "merhaba";
// }


// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JavaScript")

baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslik,p2)

alert("p2 kaldırılıyor")

div1.removeChild(p2);


alert("değiştiriliyor")
var p1 = document.getElementById("p1")
div1.replaceChild(baslik,p1)