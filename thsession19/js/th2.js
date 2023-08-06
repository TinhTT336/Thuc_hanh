let items = ["Backpack", "MiBand watch", "Ring"];
console.log(items);
let list = document.getElementById("list");
// console.log(list[0].children[0]);//tra ve duoi dang 1 mang, co the lay ra phan tu cu the bang vi tri cua mang
// for (let i = 0; i < list[0].children.length; i++){
//     console.log(list[0].children[i]);
// }
function veListItem(items) {
    for (let i = 0; i < items.length; i++) {
        //the insertAdjacentHTML la ham cho phep ghi them HTML
        //beforeend: la ghi vao trong the cha
        //li>${items[i]}</li>` la the con muon ghi vao
        list.insertAdjacentHTML("beforeend", `<li>${items[i]}<button onclick="remove(${i})"> Remove </button></li>`);
    }
}
veListItem(items);

//xoa item test
list.children[0].remove();
list.children[0].remove();

//lay ra o input va nut add
let inputText = document.getElementById("input_text");
let btnAdd = document.getElementById("btn_add");
console.log(inputText);
console.log(btnAdd);

//bat su kien click cua "Add" button
// 1.8.Khi sự kiện click của ‘Add’ button được thực hiện,
//     lấy ra value có trong ‘New item’ input
btnAdd.addEventListener("click", function () {
    // console.log(inputText.value);
    items.push(inputText.value);
    list.innerHTML = "";//xoa tat ca trong ul
    veListItem(items);
    // list.insertAdjacentHTML("beforeend", `<li>${items[items.length - 1]}<button onclick="remove(${items.length - 1})"> Remove </button></li>`);
    inputText.value = "";
})

// 1.9.Khi sự kiện ‘Add’ button được thực thi,
//     thêm value mới của ‘New item’ input vào mảng items
function remove(index) {
    items.splice(index, 1);//xoa trong mang items
    list.innerHTML = "";//xoa tat ca trong ul
    //ve lai ul
    veListItem(items);
    // list.children[index].remove();
    // console.log(items);
}

