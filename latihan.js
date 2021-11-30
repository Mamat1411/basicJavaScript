// do {
//     var name = prompt('Masukkan Nama: ');
//     var sure = confirm('Yakin namanya ' + name + '?');
//     if (sure === true) {
//         alert('Hello '+ name);
//     }
// } while (sure != true);
var star = '';
var n = prompt('How Many Rows and Column Do You Want To Print?')
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);