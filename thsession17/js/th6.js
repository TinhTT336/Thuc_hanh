// Hướng dẫn tạo đối tượng và sử dụng các phương thức để thêm, sửa, xóa và in ra đối tượng sau khi thay đổi chúng
// Bước 1: Tạo đối tượng players có các thuộc tính và giá trị như sau
let players = {
    name: "Messi",
    age: 30,
    nation: "Argentine",
    club: "PSG",
}
// Bước 2: Thêm thuộc tính email với giá trị bất kỳ cho đối tượng players và in ra
// Sử dụng cú pháp: [tên đối tượng].[email] = “giá trị muốn thêm”
players.email = "messi@psg.com";
console.log(players);

// Bước 3: Thay đổi giá trị thuộc tính “club” thành “Barcelona” và
//     in ra toàn bộ các cặp key, value của đối tượng players
players.club = "Barcelona";
for (const key in players) {
    console.log(`${key}: ${players[key]}`);
}

// Bước 4: Xóa thuộc tính age và in lại đối tượng players
delete players.age;
console.log(players);

