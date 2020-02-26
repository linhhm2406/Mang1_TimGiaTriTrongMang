let input_number = +prompt('nhap vao gia tri can kiem tra');
let array_x = [-3, 5, 1, 3, 2, 10];
let count = 0;
let save_position;
for (let i = 0; i <= array_x.length - 1; i++) {
    if (input_number == array_x[i]) {
        count++;
        save_position=i;
    }
}
if (count != 0) {
    alert('So vua nhap CO nam trong mang. Tai vi tri array_x[' + save_position+']');
} else {
    alert('So vua nhap KHONG nam trong mang');
}