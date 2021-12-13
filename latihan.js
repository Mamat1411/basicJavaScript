do {
    var player = prompt ("Pilih Gajah, Orang atau Semut?");

    var comp = Math.floor(Math.random() * 11);

    if (comp < 10 && comp > 6) {
        comp = "Gajah";
    } else if (comp < 7 && comp > 3) {
        comp = "Orang";
    } else {
        comp = "Semut";
    }

    var hasil = "";
    if (player == comp) {
        hasil = "Seri";
    } else if (player == "Gajah") {
        hasil = (comp == "Orang") ? "Menang" : "Kalah";
    } else if (player == "Semut") {
        hasil = (comp == "Gajah") ? "Menang" : "Kalah";
    } else {
        hasil = "Anda memasukkan pilihan yang salah";
    }

    alert("Kamu memilih : " + player + " dan komputer memilih: " + comp + "\nMaka hasilnya adalah: Kamu " + hasil +"!!!");
    var repeat = confirm("Main lagi?");
} while (repeat);
