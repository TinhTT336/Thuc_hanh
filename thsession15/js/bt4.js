// Cho người dùng nhập vào chuỗi kí tự và viết hàm kiểm tra xem đó có phải chuỗi kí tự đối xứng không
let input = prompt("Nhap vao 1 chuoi ky tu bat ky");
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = str.split("").reverse().join("");
    return str == reversed;
}
console.log(isPalindrome(input));