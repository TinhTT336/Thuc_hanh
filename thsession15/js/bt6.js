// Tạo hàm tính tổng các phần tử trong mảng
// let arr = [];
// let n = +prompt("Nhap so luong phan tu mang muon tao");
// for (let i = 1; i < arr.length; i++){
//     num = +prompt(`Nhap phan tu thu ${num + 1}/${n} cua mang`);
//     arr.push(num);
// }
function sumArr(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++){
        sum += arr[j];
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];
console.log(sumArr(arr));
console.log(sumArr(arr2));
console.log(sumArr(arr3));