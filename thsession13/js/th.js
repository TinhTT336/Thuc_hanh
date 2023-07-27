// Bai 1: Viết một chương trình JavaScript thực hiện đảo ngược các giá trị trong một mảng đã cho.
// Không sử dụng phương thức reverse()
//cach 1:
// let arr1 = [-3, 5, 1, 3, 2, 10];
// let first = 0;
// let last = arr1.length - 1;
// while (first < last) {
//     let b = arr1[first];
//     arr1[first] = arr1[last];
//     arr1[last] = b;
//     first++;
//     last--;
// } console.log(arr1);

//cach 2:
// let arr1 = [-3, 5, 1, 3, 2, 10];
// let arr2 = [];
// for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2.push(arr1[i]);
// }
// console.log(arr2);



//bai 2: Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. 
// Nếu có in ra vị trí của phần tử đó.

// let n = +prompt("Nhap vao 1 so bat ky");
// let arr2 = [2, 5, 7, 23, 18, 32];
// for (i = 0; i < arr2.length; i++) {
//     if (n == arr2[i]) {
//         console.log(`${n} nam o vi tri thu ${i}`);
// }

//cach 2: su dung indexOf
// let n = +prompt("Nhap vao 1 so bat ky");
// let arr2 = [2, 5, 7, 23, 18, 32];
// let index = arr2.indexOf(n);
// if (index != -1) {
//     console.log(n + " Vi tri", index + 1);
// } else {
//     console.log("Khong co!");
// }

// Bai 3: Hướng dẫn tạo mảng và sử dụng các phương thức để thêm, xóa và thay đổi giá trị phần tử ở trong mảng
// Chạy vòng lặp for với i chạy từ 0 đến 10
// Với mỗi lần chạy sử dụng phương thức push() để thêm phần tử đó vào mảng array ban đầu
// const N = 10;
// let arr3 = [];
// for (let i = 0; i <= N; i++) {
//     arr3.push(i);
// } console.log("Su dung phuong thuc push()", arr3);
// // Tạo thêm mảng array1 sau đỏ sử dụng phương thức unshift()
// // để thêm các phần tử của array1 và đầu của mảng array
// let a = 10;
// arr3.unshift(a);
// console.log("Su dung phuong thuc unshift", arr3);
// //Sử dụng phương thức pop() để xóa phần tử cuối mảng array ban đầu
// arr3.pop();
// console.log("Su dung phuong thuc pop", arr3);
// //Sử dụng phương thức shift() để xóa phần tử đầu mảng array ban đầu
// arr3.shift();
// console.log("Su dung phuong thuc shift", arr3);
// // Sử dụng hàm splice để xóa 1 hoặc nhiều phần tử trong mảng array ban đầu.
// // Với cú pháp array.splice(vị trí index, số lượng phần tử muốn xóa) để xóa nhiều phần tử trong mảng.
// arr3.splice(5, 2);
// console.log("Su dung phuong thuc splice", arr3);

// bai 4:
// Tạo mảng có sẵn với các phẩn tử số.Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẳn thì alert(“Chúc bạn may mắn lần sau”)
// let n = +prompt("Nhap vao 1 so bat ky");
// let arr4 = [3, 6, 7, 21, 32, 54, 8, 10];
// let check = false;
// for (i = 0; i < arr4.length; i++) {
//     if (n == arr4[i]) {
//         check = true;
//     }
//     if (check == true) {
//         alert("Bingo");
//     } else {
//         alert("Chuc ban may man lan sau");
//     }
// }

// bai 5:
// Cho ngươi dùng nhập vào dãy số bất kỳ.Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
// Tiến hành đảo ngược các phần tử trong mảng
// VD: 1,3,5,12,65,98
// let n = prompt("Nhập vào day số bất kỳ được ngăn cách bởi dấu ,");
// let convert = n.split(",");
// console.log(convert);
// let array = [];
// for (let i = convert.length - 1; i >= 0; i--) {
//     array.push(convert[i]);
//     console.log(array);
// }
//cach 2:
// const arr = "nguyen minh huy" // chuỗi cần đảo ngược

// let doDaiMang = arr.length // lấy độ dài của chuỗi
// let arr2 = "" // chuỗi kết quả; yuh hnim ....

// // i = doDaiMang - 1: là giữ vị trí ở cuối chuỗi
// // i -- : lùi dần về đầu chuỗi
// // i >= 0 : vẫn còn chuỗi để lùi
// for (let i = doDaiMang - 1; i >= 0; i--) {
//     // thêm các phần tử cho chuỗi kết quả bằng các phần tử của chuỗi ban đầu
//     // theo thứ tự từ cuối về đầu vì mình lặp từ cuối chuỗi về đầu chuỗi
//     arr2 += arr[i];
// }
// console.log(arr2.split(""));

// bai 6:
// Cho người dùng nhập vào dãy số bất kỳ.Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
// Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng
//89,57,-20,36,24,75
// let n = prompt("Nhap vao day so bat ky duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log(convert);
// let max = convert[0];
// for (let i = 0; i < convert.length; i++) {
//     if (max < convert[i]) {
//         max = convert[i];
//     }
// }
// console.log(max);

// Thực hành 3: nhập từ khóa và tìm kiếm xem có trong mảng của mình hay không

// khai báo mảng các tên của mình
const arr = ["nam", "minh", "huy", "tuan", "anh"]

// người dùng nhập tên họ muốn
const namez = prompt("Nhap ten mot nguoi")

// dùng hàm indexOf để tìm kiếm vị trị của namez trong mảng arr
// nếu tìm thấy sẽ trả ra vị trí của namez trong mảng arr
// nếu không thấy sẽ trả ra -1
let index = arr.indexOf(namez)

// kiểm tra vị trí tìm thấy
// nếu khác -1 tức là tìm thấy thì in ra vị trí + 1 vì trong arr đánh chỉ số từ 0
// nếu = -1 tức là ko tìm thấy thì in ra không có
if (index != -1) {
    console.log("Vi tri ", index + 1);
} else {
    console.log("Khong co !");
}