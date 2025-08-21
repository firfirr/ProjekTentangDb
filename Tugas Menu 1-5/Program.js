class Recipe {
    constructor(uang, bbrapa) {
        this.Uang = uang
        this.Bbrapa = bbrapa
    }
    get recipeproperty() {
        return this.Bbrapa;
    }
    set recipeproperty(value) {
        if (value < 0) {
            console.log("tdk boleh nol!")
        }
        this.Bbrapa = value 
    }
    Pay(){
        
    }
}

class MenuAyamGoreng extends Recipe{
    /**
     *
     */
    constructor(uang, bbrapa) {
        super(uang, bbrapa)
    }
    // override method from parent class
    Pay() {
        let Menu = "Ayam Goreng"
        let MyHarga = 5000
        let MyStock = 13

        // validasi
        if (this.recipeproperty <= 0) {
            console.log("Tdk boleh beli")
        } else if(this.Bbrapa > 20){
            console.log("Habis Stok, sisa "+MyStock+" "+Menu)
        } else if (this.Bbrapa > MyStock){
            console.log("Maaf stock sisa = " + MyStock + ", mau pesan lagi atau ganti menu?")
        } else if (this.Bbrapa <= MyStock) {
            let TotalBayar = (this.Bbrapa * MyHarga * 0.1) + (this.Bbrapa * MyHarga);
            let Result = this.Uang - TotalBayar;

                console.log(`Nota\nMenu 1 = ${Menu}\nPajak = 10%\nPembayaran = ${this.Uang}\nTotal Bayar = ${TotalBayar}\nkembalian = ${Result}\nTerima Kasih.`)
        } else {
            console.log("tdk ada menu")
        }
    }
}

class MenuSeblak extends Recipe{
    /**
     *
     */
    constructor(uang, bbrapa) {
        super(uang, bbrapa)
    }
    // override method from parent class
    Pay() {
        let Menu = "Seblak"
        let MyHarga = 14000
        let MyStock = 50

        // validasi
        if (this.recipeproperty <= 0) {
            console.log("Tdk boleh beli")
        } else if(this.Bbrapa > 20){
            console.log("Habis Stok, sisa "+MyStock+" "+Menu)
        } else if (this.Bbrapa > MyStock){
            console.log("Maaf stock sisa = " + MyStock + ", mau pesan lagi atau ganti menu?")
        } else if (this.Bbrapa <= MyStock) {
            let TotalBayar = (this.Bbrapa * MyHarga * 0.1) + (this.Bbrapa * MyHarga);
                let Result = this.Uang - TotalBayar;

                console.log(`Nota\nMenu 1 = ${Menu}\nPajak = 10%\nPembayaran = ${this.Uang}\nTotal Bayar = ${TotalBayar}\nkembalian = ${Result}\nTerima Kasih.`)
        } else {
            console.log("tdk ada menu")
        }
    }
}

class MenuMieAyam extends Recipe{
    /**
     *
     */
    constructor(uang, bbrapa) {
        super(uang, bbrapa)
    }
    // override method from parent class
    Pay() {
        let Menu = "Mie Ayam"
        let MyHarga = 10000
        let MyStock = 32

        // validasi
        if (this.recipeproperty <= 0) {
            console.log("Tdk boleh beli")
        } else if(this.Bbrapa > 20){
            console.log("Habis Stok, sisa "+MyStock+" "+Menu)
        } else if (this.Bbrapa > MyStock){
            console.log("Maaf stock sisa = " + MyStock + ", mau pesan lagi atau ganti menu?")
        } else if (this.Bbrapa <= MyStock) {
            let TotalBayar = (this.Bbrapa * MyHarga * 0.1) + (this.Bbrapa * MyHarga);
                let Result = this.Uang - TotalBayar;

                console.log(`Nota\nMenu 1 = ${Menu}\nPajak = 10%\nPembayaran = ${this.Uang}\nTotal Bayar = ${TotalBayar}\nkembalian = ${Result}\nTerima Kasih.`)
        } else {
            console.log("tdk ada menu")
        }
    }
}

class MenuKetoprak extends Recipe{
    /**
     *
     */
    constructor(uang, bbrapa) {
        super(uang, bbrapa)
    }
    // override method from parent class
    Pay() {
        let Menu = "Ketoprak"
        let MyHarga = 17000
        let MyStock = 48

        // validasi
        if (this.recipeproperty <= 0) {
            console.log("Tdk boleh beli")
        } else if(this.Bbrapa > 20){
            console.log("Habis Stok, sisa "+MyStock+" "+Menu)
        } else if (this.Bbrapa > MyStock){
            console.log("Maaf stock sisa = " + MyStock + ", mau pesan lagi atau ganti menu?")
        } else if (this.Bbrapa <= MyStock) {
            let TotalBayar = (this.Bbrapa * MyHarga * 0.1) + (this.Bbrapa * MyHarga);
                let Result = this.Uang - TotalBayar;

                console.log(`Nota\nMenu 1 = ${Menu}\nPajak = 10%\nPembayaran = ${this.Uang}\nTotal Bayar = ${TotalBayar}\nkembalian = ${Result}\nTerima Kasih.`)
        } else {
            console.log("tdk ada menu")
        }
    }
}

class MenuBaso extends Recipe{
    /**
     *
     */
    constructor(uang, bbrapa) {
        super(uang, bbrapa)
    }
    // override method from parent class
    Pay() {
        let Menu = "Baso123"
        let MyHarga = 12000
        let MyStock = 88

        // validasi
        if (this.recipeproperty <= 0) {
            console.log("Tdk boleh beli")
        } else if(this.Bbrapa > 20){
            console.log("Habis Stok, sisa "+MyStock+" "+Menu)
        } else if (this.Bbrapa > MyStock){
            console.log("Maaf stock sisa = " + MyStock + ", mau pesan lagi atau ganti menu?")
        } else if (this.Bbrapa <= MyStock) {
            let TotalBayar = (this.Bbrapa * MyHarga * 0.1) + (this.Bbrapa * MyHarga);
                let Result = this.Uang - TotalBayar;

                console.log(`Nota\nMenu 1 = ${Menu}\nPajak = 10%\nPembayaran = ${this.Uang}\nTotal Bayar = ${TotalBayar}\nkembalian = ${Result}\nTerima Kasih.`)
        } else {
            console.log("tdk ada menu")
        }
    }
}

// tes
var tes = new MenuBaso(500000, 10)
tes.Pay()





