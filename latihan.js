// Game Suit
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

//Guess The Number Game
// do {
//     var chances = 3;
//     var tryAgain = true;
//     var randomizedNumber = 1 + Math.floor(Math.random() * 9);
//     while (chances > 0 && tryAgain) {
//         var number = randomizedNumber;
//         alert("Guess a number between 1-10. \nYou have " + chances + " chance(s) remaining.");
//         var guess = prompt("Pick a number from 1-10");
//         if (guess > 0 && guess <= 10) {
//             if (guess == number) {
//                 alert("Great!! You guess it correctly!!");
//                 break;
//             } else if (guess < number) {
//                 alert("Your number is too low from the correct number!");
//                 chances -= 1;
//             } else if (guess > number) {
//                 alert("Your number is too high from the correct number!");
//                 chances -= 1;
//             }
//             if (chances > 0) {
//                 tryAgain = confirm("Try Again?");
//             } else {
//                 alert("You Lose! You run out of chances.");
//             }
//         } else {
//             alert("Your number is out of range.");
//         }
//     }
//     var playAgain = confirm("Play Again?");
// } while (playAgain);

//Public Transport Passanger Management
//Variable init
// var passanger = [];
// //passangerBoarding Function init
// function passangerBoarding(name, passanger) {
//     //if there is no passanger
//     if (passanger.length == 0) {
//         //insert a new passanger into the array
//         passanger.push(name);
//         return passanger;
//     } else {
//         //trace the entire seat from the beginning
//         for (var i = 0; i < passanger.length; i++) {
//             if (passanger[i] == undefined) {
//                 //if the seat is empty in the middle of the array
//                 passanger[i] = name;
//                 return passanger;
//             } else if (passanger[i] == name) {
//                 //if the passanger's name is the same as one of the existing passangers
//                 alert("This passanger already exists!");
//                 return passanger;
//             } else if (i == passanger.length - 1) {
//                 //if the seat is orderly filled and still available
//                 passanger.push(name);
//                 return passanger;
//             }
//         }
//     }
// }
// //passangerLeaving Function init
// function passangerLeaving(name, passanger) {
//     //if the seat is empty
//     if (passanger.length == 0) {
//         alert("No Passanger on board!");
//         return passanger;
//     } else {
//         //if the seat is not empty
//         //track the seat from the beginning
//         for (var i = 0; i < passanger.length; i++) {
//             if (name == passanger[i]) {
//                 passanger[i] = undefined;
//                 return passanger;
//             } else if (i == passanger.length - 1) {
//                 alert("No Passanger with Such Name on board!");
//                 return passanger;
//             }
//         }
//     }
// }

//Object Exercise
//Literal Object
// var student1 = {
//     name: 'Muhammad Mujahid',
//     id: '123',
//     email: 'muhammadmujahid14@gmail.com',
//     workplace: 'XSIS Mitra Utama'
// }
// var student2 = {
//     name: 'Sari Setyaningsih',
//     id: '456',
//     email: 'sarisetyaningsih98@gmail.com',
//     workplace: 'Unemployed'
// }

//Function Declaration Object
// function students(name, id, email, workplace) {
//     var student = {};
//     student.name = name;
//     student.id = id;
//     student.email = email;
//     student.workplace = workplace;
//     return student;
// }

// var student1 = students("Muhammad Mujahid", 123, "muhammadmujahid14@gmail.com", "XSIS Mitra Utama");
// var student2 = students("Sari Setyaningsih", 456, "sarisetyaningsih98@gmail.com", "Unemployed");

//Generating Object Using Constructor
function Student(name, id, email, workplace) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.workplace = workplace;
}

var student1 = new Student("Muhammad Mujahid", 123, "muhammadmujahid14@gmail.com", "XSIS Mitra Utama");
var student2 = new Student("Sari Setyaningsih", 456, "sarisetyaningsih98@gmail.com", "Unemployed");