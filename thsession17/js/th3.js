// Tạo một class Cat có những thuộc tính:
// Tên, khối lượng, tốc độ di chuyển
// Có khả năng thực hiện hành vi kêu
// Có khả năng bắt chuộc nếu tốc độ của Mèo lớn hơn Chuột
// Có khả năng ăn chuột khi đó khối lượng mèo sẽ cộng thêm khối lượng của Chuột(chỉ ăn chuột còn sống)
//  - Tạo class Mouse có những thuộc tính:
// Khối lượng và tốc độ di chuyển
// Thuộc tính alive để xác định chuột còn sống hay không
class Mouse {
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
        this.alive = true;
    }
}

class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.meow = () => {
            console.log(`${this.name} meo meo`);
        }
        this.catchMouse = (mouse) => {
            if (this.speed > MouseEvent.speed) {
                console.log(`${this.name} bắt chuột!`);
                mouse.alive = false;
            } else {
                console.log(`${this.name} khong bắt duoc chuột!`);
            }
        }
        this.eatMouse = (mouse) => {
            if (mouse.alive) {
                console.log(`${this.name} không thể ăn được chuột...`);
            } else {
                console.log(`${this.name} đã ăn được chuot`);
                this.weight += mouse.weight;
                console.log(this.weight);
            }

        }

    }
}
const cat = new Cat("Tom", 5, 20);
const mouse = new Mouse(1, 10);
cat.meow();
cat.catchMouse(mouse);
cat.eatMouse(mouse);