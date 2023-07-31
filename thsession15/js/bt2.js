function temperatureConverter(num) {
    num = +num;
    document.getElementById("outputCelcius").innerHTML = (num - 32) / 1.8;
}