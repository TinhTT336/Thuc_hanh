//Tạo hàm biến ký tự đầu tiên ở mỗi từ thành chữ in hoa
function capitalize(str) {
    let words = str.toLowerCase().split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        let string = words[i].split("");
        string[0] = string[0].toUpperCase();
        words[i] = string.join("");
    } return words.join(" ");
}
let a = "hello WORD";
console.log(capitalize(a));

// function capitalize_Words(str) {
//     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// }
// document.write(capitalize_Words('js string exercises'));