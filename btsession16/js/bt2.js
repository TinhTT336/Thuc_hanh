// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(5, 2, 1));

// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không ?
function isPrimeNumber(n) {
    if (n < 2) {
        console.log(`${n} khong la so nguyen to`);
    } else {
        let check = false;
        for (let i = 2; i < n / 2; i++) {
            if (n % i == 0) {
                check = true;
                break;
            }
        }
        if (check == true) {
            console.log(`${n} khong la so nguyen to`);
        } else {
            console.log(`${n} la so nguyen to`);
        }
    }
}
console.log(isPrimeNumber(2));

// Bài 3: Cho mảng sau:
// Viết hàm trả về tất cả các cặp số có tổng bằng 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findTwoNumberHasTotalIsTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length / 2; j++) {
            if (arr[i] + arr[j] == 10) {
                console.log(`2 so ${arr[i]} va ${arr[j]} co tong bang 10`);
            }
        }
    }
}
console.log(findTwoNumberHasTotalIsTen(arr));

// Bài 4: Cho người dùng nhập vào chuỗi kí tự.Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng
let str = "Hello World";
let arr1 = str.split("");
console.log(arr1);
function countTimes(arr1) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] === arr1[j]) {
                count++;
            }
        } console.log(`${arr1[i]} xuat hien ${count} lan trong mang`);
    }
}
console.log(countTimes("Hello World"));
// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Thực thi hàm vừa khởi tạo
function calculateFactorial(n) {
    let multi = 1;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            multi = multi * i;
        } return multi;
    }
}
console.log(calculateFactorial(3));

// Bài 6: Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// let str1 = prompt("Nhap 1 chuoi so de sap xep")//(4, 5, 6, 7, 53, 6);
// let arr2 = str1.split(",");
// console.log(arr2);
// function sortUpAscending(str) {
//     return arr2.sort((a, b) => a - b);
// }
// console.log(sortUpAscending(arr2));

// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không