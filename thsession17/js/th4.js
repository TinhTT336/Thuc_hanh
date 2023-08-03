// Tạo một đối tượng “staff” chứa các thuộc tính sau id, name, age, salary.
// Sau đó tạo một mảng “company” chứa các đối tượng “staff” và thực hiện thêm, sửa, xóa danh sách nhân viên
let staff = {
    id: 101,
    name: 'Ho Van B',
    age: 24,
    salary: 1000,
}
console.log(staff);
let company = [];
company.push(staff);
console.log(company);

// Thêm mới nhân viên vào trong mảng company
// Tạo các biến newName, newAge, newSalary cho người dùng nhập thông tin muốn thêm mới
// Khởi tạo đối tượng “newStaff” có chứa các thuộc tính tương tự như thuộc tính của đối tượng “staff”
// Sau đó sử dụng phương thức push() để thêm mới “newStaff” vào trong mảng “company”

// Bước 3: Cập nhật thông tin cho nhân viên có trong mảng “company” (ví dụ cập nhật thuộc tính “salary” thông qua id)
// Cho người dùng nhập vào id nhân viên và mức lương muốn thay đổi.
// Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”

// Bước 4: Xóa thông tin cho nhân viên có trong mảng “company”
// Cho người dùng nhập vào id nhân viên muốn xóa
// Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”
// Sử dụng phương thức splice() để xóa nhân viên đó khỏi mảng
let input = prompt("Nhập vào C/R/U/D/E để tiếp tục chương trình");
while (true) {
    if (input == "C") {
        let newName = prompt("Nhap ten nhan vien muon them");
        let newAge = +prompt("Nhap tuoi nhan vien ban muon them");
        let newSalary = +prompt("Nhap luong cua nhan vien moi");
        let newStaff = {
            id: Math.round(Math.random() * 1000),
            name: newName,
            age: newAge,
            salary: newSalary,
        }
        company.push(newStaff);
        console.log(company);
    } else if (input == "R") {
        console.log(company);
    } else if (input == "U") {
        let inputUpdate = +prompt("Nhap vao id nhan vien muon cap nhat");
        let updateSalary = +prompt("Nhap vao muc luong muon thay doi");
        // let findIndex = company.findIndex((value) => {
        //     return inputUpdate == value.id;
        // })
        let findIndex = company.indexOf(inputUpdate);
        company[findIndex].salary = updateSalary;
        console.log(company);
    } else if (input == "D") {
        let inputDelete = +prompt("Nhap vao id nhan vien muon xoa");
        let findIndex = company.indexOf(inputDelete);
        company.splice(findIndex, 1);
        console.log(company);
    } else if (input == "E") {
        console.log("Cam on ban da su dung chuong trinh");
        break;
    } else { }
    input = prompt("Nhập vàoC/R/U/D/E để tiếp tục chương trình");
}