// Tạo hàm quy đổi độ C sang độ F và ngược lại với công thức như sau:
// F = C * 1.8 + 32
// C = (F - 32) / 1.8
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));