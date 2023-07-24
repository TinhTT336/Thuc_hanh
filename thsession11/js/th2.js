// Chương trình hiển thị bảng với dữ liệu như sau:
// let s;
// s = "";
// for (let i = 1; i <= 10; i++) {
//     s = +"\n";
//     for (let j = 1; j <= 10; j++) {
//         s += "|" + i * j + '|';
//     } s = +"\n";
// }
// console.log(s);

// let s;
// s = '';
// let i = 1;
// let j = 1;
// while (i <= 10) {
// s += "\n";
//     while (j <= 10) {
//         s += "|" + i * j + '|';
//         j++;
//     } s += "\n";
//     i++;
// } console.log(s);

// Bài 1: Viết chương trình nhận vào một số từ hộp thoại,
//     việc nhập kết thúc khi người dùng nhập vào giá trị - 1.
//      Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện 
// tính tổng các giá trị đó.
// let num = +prompt("Nhap vao 1 so");
// let sum = 0;
// while (num !== -1) {
//     console.log(num);
//     sum += num;
//     num = +prompt("Tiep tuc nhap vao 1 so, ket thuc neu nhap vao -1");
// }
// console.log('Tong gia tri cac so nhap vao la ' + sum);

// Bài 2: Viết chương hình hiển thị thẻ < hr > theo độ rộng từ 1 đến 100.
// let i = 1;
// while (i <= 100) {
//     document.write("<hr width = " + i + "%>");
//     i++;
// }

// Sử dụng vòng lặp do while để viết lại chương trình 
// yêu cầu nhập các số từ 1 -> 10 ở ví dụ trong phần vòng lặp while.
// let value = null;
// do {
//     value = +prompt("Nhap vao cac so tu 1 den 10");
// } while (value < 1 || value > 10);
// alert("So ban vua nhap la " + value);

// Viết một ứng dụng để in ra màn hình console một bảng cửu chương với kết quả như sau:
// let i = 1;
// let j = 1;
// for (i = 1; i < 10; i++) {
//     console.log(`${j} * ${i} = ${j * i}`);
// }
// // for (j = 1; j < 10; j++) {
// //     console.log(`${j} * ${i} = ${i * j}`);
// // }

// function evenIsBlueOddIsRed() {
//     var j = 0;
// for (let i = 1; i <= 100; i += 2) {
//     let j = i + 1;
//     document.write( 
//         '<font color="red">' + i + "</font>",
//         '<font color="blue">' + j + "</font>"
//     );
// }
// }
