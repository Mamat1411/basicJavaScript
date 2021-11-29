do {
    var name = prompt('Masukkan Nama: ');
    var sure = confirm('Yakin namanya ' + name + '?');
    if (sure === true) {
        alert('Hello '+ name);
    }
} while (sure != true);
// var name = prompt('Masukkan Nama: ');
// var sure = confirm('Yakin namanya ' + name + '?');
// if (sure === true) {
//     alert('Hello '+ name);
// } else if (sure === false) {
//     while (sure != true) {
//         var name = prompt('Masukkan Nama: ');
//         var sure = confirm('Yakin namanya ' + name + '?');
//     }
// }
