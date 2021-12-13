// do {
//     var player = prompt ("Pilih Gajah, Orang atau Semut?");

//     var comp = Math.floor(Math.random() * 11);

//     if (comp < 10 && comp > 6) {
//         comp = "Gajah";
//     } else if (comp < 7 && comp > 3) {
//         comp = "Orang";
//     } else {
//         comp = "Semut";
//     }

//     var hasil = "";
//     if (player == comp) {
//         hasil = "Seri";
//     } else if (player == "Gajah") {
//         hasil = (comp == "Orang") ? "Menang" : "Kalah";
//     } else if (player == "Semut") {
//         hasil = (comp == "Gajah") ? "Menang" : "Kalah";
//     } else {
//         hasil = "Anda memasukkan pilihan yang salah";
//     }

//     alert("Kamu memilih : " + player + " dan komputer memilih: " + comp + "\nMaka hasilnya adalah: Kamu " + hasil +"!!!");
//     var repeat = confirm("Main lagi?");
// } while (repeat);
do {
    var chances = 3;
    var tryAgain = true;
    var randomizedNumber = 1 + Math.floor(Math.random() * 9);
    while (chances > 0 && tryAgain) {
        var number = randomizedNumber;
        alert("Guess a number between 1-10. \nYou have " + chances + " chance(s) remaining.");
        var guess = prompt("Pick a number from 1-10");
        if (guess > 0 && guess <= 10) {
            if (guess == number) {
                alert("Great!! You guess it correctly!!");
                break;
            } else if (guess < number) {
                alert("Your number is too low from the correct number!");
                chances -= 1;
            } else if (guess > number) {
                alert("Your number is too high from the correct number!");
                chances -= 1;
            }
            if (chances > 0) {
                tryAgain = confirm("Try Again?");
            } else {
                alert("You Lose! You run out of chances.");
            }
        } else {
            alert("Your number is out of range.");
        }
    }
    var playAgain = confirm("Play Again?");
} while (playAgain);
