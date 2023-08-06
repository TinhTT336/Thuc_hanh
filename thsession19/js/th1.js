const container = document.getElementById("list");
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`)
}
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`)
}
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("beforeend", `<li>${i}</li>`)
}
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("afterend", `<li>${i}</li>`)
}

// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//     document.getElementById("demo").innerHTML = "Happy Birthday!"
// }

function myStopFunction() {
    clearTimeout(myTimeout);
}

let x = document.getElementById("txt");
setTimeout(function () {
    x.value = "2 seconds"
}, 2000);
setTimeout(function () {
    x.value = "4 seconds"
}, 4000);
setTimeout(function () {
    x.value = "6 seconds"
}, 6000);

function startTime() {
    const date = new Date();
    document.getElementById('demo').innerHTML = date.toLocaleTimeString(); setTimeout(function () { startTime() }, 1000);
}
const element = document.getElementById("setinter");
setInterval(function () { element.innerHTML += "Hello" }, 1000);