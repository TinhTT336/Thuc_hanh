// Tạo mảng todoList có chứa các đối tượng là các công việc cần làm và trạng thái hoàn thành của chúng
// Tạo các hàm để có thể thêm mới, cập nhật hay xóa các công việc trong mảng todoList trên
// Bước 1: Tạo mảng array và cho người dùng nhập vào giá trị của n qua prompt
// Bước 2: Tạo hàm có tên là newTodo() truyển vào tham số todo là các việc cần làm
// Tạo biến newId để cập nhật id cho công việc mới
// Dùng vòng for để duyệt các phần tử trong mảng todoList để gán giá trị cho newId
// Cập nhật lại đối tượng newTodo với các thuộc tính: id, todo, completed
// Sử dụng phương thức push để thêm công việc mới vào mảng todoList
// Bước 3: Tạo hàm updateTodo() để cập nhật lại trạng thái cho công việc
// Tạo biến findIndex để tìm vị trí index của id cần cập nhật trạng thái trong mảng todoList
// Sử dụng hàm có sẵn findIndex(viết kiểu arrow function) để trả về kết quả
// Gán lại giá trị todoList ở vị trí index được tìm thấy bằng true
// Bước 4: Tạo hàm removeTodo() để cập nhật lại trạng thái cho công việc
// Tạo biến check = - 1 và sử dụng kỹ thuật cắm cờ để kiểm tra id đó có tồn tại trong mảng todoList không(có thể sử dụng hàm findIndex() như ở bước 3)
// Dùng vòng for để duyệt các phần tử, nếu tìm thấy id thì gán check = i
// Ra ngoài vòng for sử dụng phương thức splice xóa đi 1 phần tử ở vị trí check

const todoList = [
    { id: 1, todo: "Have breakfast", completed: false },
    { id: 2, todo: "Have breakfast", completed: true },
    { id: 3, todo: "Have breakfast", completed: false },
];
function addToDo(toDo) {
    let newId = 0; //+prompt("Nhap ID cho cong viec moi ban muon them");
    for (let i = 0; i < todoList.length; i++) {
        newId - todoList.length + 1;
    }
    let newToDo = {
        id: newId,
        todo: toDo,
        completed: false,
    }
    todoList.push(newToDo);
}
addToDo('di tam');
console.log(todoList);

function updateToDo(id) {
    let findIndex = todoList.findIndex((e) => {
        return id === e.id;
    });
    todoList[findIndex].completed = true;

    // let findIndex = todoList.indexOf(id);
    // todoList[findIndex].completed = true;
}
updateToDo(3);
console.log(todoList);

function removeToDo(id) {
    let check = -1;
    for (let i = 0; i < todoList.length; i++) {
        if (i == todoList[i].id) {
            check = i;
        }
    }
    todoList.splice(check, 1);
}


removeToDo(2);
// console.log(todoList.includes(2));
// console.log(todoList);