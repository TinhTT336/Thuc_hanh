// Hãy xây dựng lớp Date theo sơ đồ lớp sau:
// Lớp MyDate gồm:
// Thuộc tính:
// o day(ngày) sẽ nhận vào giá trị dạng số nguyên
// o month(tháng) sẽ nhận vào giá trị dạng số nguyên
// o year(năm) sẽ nhận vào giá trị dạng số nguyên
// Phương thức:
// o Date(day, month, year) là phương thức khởi tạo để tạo đối tượng với 3 tham số.
// o getDay(), getMonth(), getYear() là phương thức trả về ngày, tháng, năm
// o setDay(), setMonth(), setYear() là phương thức thiết đặt lại giá trị mới cho ngày tháng năm

class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.getDay = () => {
            return this.day;
        }
        this.getMonth = () => {
            return this.month;
        }
        this.getYear = () => {
            return this.year;
        }
        this.setDay = (day) => {
            this.day = day;
        }
        this.setMonth = (month) => {
            this.month = month;
        }
        this.setYear = (year) => {
            this.year = year;
        }
        this.setDate = () => {
            return this.setDay + this.setMonth + this.setYear;
        }
        this.toString = () => {
            return this.setDate.toString(" ");
        }
    }
}
let date = new MyDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
console.log(day + "/" + month + "/" + year);

date.setDay(10);
date.setMonth(10);
date.setYear(2020);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
console.log(day + "/" + month + "/" + year);

// console.log(date.day + "/" + date.month + "/" + date.year);
// console.log(date);

date.setDate();
console.log(date);


