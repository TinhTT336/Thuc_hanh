// Hãy xây dựng lớp hình tròn theo sơ đồ lớp sau:
// Lớp Circle(hình tròn) gồm:
// Thuộc tính:
// o bán kính(radius) sẽ nhận vào giá trị dạng số thực
// o màu sắc(color) sẽ nhận vào giá trị dạng chuỗi.
// Phương thức:
// o Circle() là phương thức khởi tạo để tạo đối tượng không tham số.
// o getRadius() là phương thức trả về bán kính của hình tròn
// o getArea() là phương thức trả về diện tích hình tròn theo công thức S = Math.PI * radius * radius

class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.getRadius = () => { 
            return radius;
        }
        this.getArea = () => {
            return Math.PI * radius * radius;
        }
    }
}
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea(); 
console.log(`radius: ${radius}; area: ${area}`);