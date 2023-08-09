let player = document.getElementById("inputPlayer");
let btnAdd = document.getElementById("inputAdd");

let playList = document.getElementById("playList");

btnAdd.addEventListener("click", function (e) {
    localStorage.setItem(player.value, player.value)

    let liPlayer = document.createElement("li");
    let liText = document.createTextNode(player.value);
    liPlayer.appendChild(liText);

    player.value = "";
})

function getAllPlayer() {
    for (let i = 0; i < localStorage.length; i++) {
        let liPlayer = document.createElement("li");
        let liText = document.createTextNode(localStorage.key(i));
        liPlayer.appendChild(liText);
        playList.appendChild(liPlayer);
    }
}
getAllPlayer();

//xoa
let clear = document.getElementById("clearPlayer");
clear.addEventListener("click", function () {
    localStorage.clear();
    playList.innerHTML = "";
})
let liPlayer = document.createElement("li");
//them nut xoa ben canh cau thu
let button = document.createElement("button");
button.innerText = "Xoa";
liPlayer.appendChild(button);
button.addEventListener("click", function () {
    let keyPlayer = button.previousSibling;
    localStorage.removeItem(localStorage.key(keyPlayer))
    button.parentNode.outerHTML = "";
})

let delPlayer = document.querySelectorAll("ul#playList li button")
for (let i = 0; i < delPlayer.length; i++) {
    delPlayer[i].addEventListener("click", function () {
        let keyPlayer = delPlayer[i].previousSibling;
        localStorage.removeItem(localStorage.key(keyPlayer));
        delPlayer[i].parentNode.outerHTML = "";

    })
}