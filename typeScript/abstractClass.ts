abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yap")
    }
}

class MorgeKredi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Konut kredisine göre hesap yap")
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let margecKredi = new MorgeKredi()
margecKredi.hesapla();
margecKredi.kaydet();